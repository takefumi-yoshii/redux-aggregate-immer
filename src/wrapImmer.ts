import immer from 'immer'
import { KeyMap, Mutations, WrapImmerReturn } from '../typings'

function wrapImmer<M extends KeyMap & Mutations<M, void>>(
  imutations: M
): WrapImmerReturn<M> {
  const mutations: KeyMap = {}
  Object.keys(imutations).forEach(imutationKey => {
    mutations[imutationKey] = <ST, PL>(state: ST, payload?: PL): ST =>
      immer(state, _state => {
        imutations[imutationKey](_state, payload)
      })
  })
  return mutations as WrapImmerReturn<M>
}
export { wrapImmer, immer }
