import immer from 'immer'
import { KeyMap, MutableMutations, ImmutableMutations } from '../typings'

function wrapImmer<M extends KeyMap & MutableMutations<M>>(
  mutableMutations: M
): ImmutableMutations<M> {
  const immutableMutations: KeyMap = {}
  Object.keys(mutableMutations).forEach(key => {
    immutableMutations[key] = <ST, PL>(state: ST, payload?: PL): ST =>
      immer(state, _state => {
        mutableMutations[key](_state, payload)
      })
  })
  return immutableMutations as ImmutableMutations<M>
}
export { wrapImmer, immer }
