import immer from 'immer'
import { KeyMap, MutableMutations, ImmutableMutations } from '../typings'

function wrapImmer<M extends KeyMap & MutableMutations<M>>(
  imutations: M
): ImmutableMutations<M> {
  const mutations: KeyMap = {}
  Object.keys(imutations).forEach(imutationKey => {
    mutations[imutationKey] = <ST, PL>(state: ST, payload?: PL): ST =>
      immer(state, _state => {
        imutations[imutationKey](_state, payload)
      })
  })
  return mutations as ImmutableMutations<M>
}
export { wrapImmer, immer }
