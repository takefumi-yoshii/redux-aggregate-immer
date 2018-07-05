import { wrapImmer } from '../src/index'

describe('redux-aggregate-immer', () => {
  interface State {
    count: number
    nested: { some: { value: string }; another: { value: number } }
  }
  const initialState: State = {
    count: 0,
    nested: { some: { value: 'string' }, another: { value: 0 } }
  }
  const mutations = {
    increment(state: State): void {
      state.count++
    },
    decrement(state: State): void {
      state.count--
    },
    setCount(state: State, payload: { amount: number }): void {
      state.count = payload.amount
    },
    setNestedSomeValue(state: State, payload: { value: string }): void {
      state.nested.some.value = payload.value
    }
  }
  const immerWrappedMutations = wrapImmer(mutations)

  test('src function return void', () => {
    const state: State = { ...initialState }
    const returnVoid = mutations.increment(state)
    expect(returnVoid).toEqual(void 0)
  })

  test('immer wrapped mutation return state', () => {
    const state: State = { ...initialState }
    const returnState = immerWrappedMutations.increment(state)
    expect(returnState).toEqual({ ...state, count: 1 })
  })

  test('immer wrapped mutation mutate as immutable', () => {
    const state: State = { ...initialState }
    const returnState = immerWrappedMutations.setNestedSomeValue(state, {
      value: 'STRING'
    })
    expect(returnState).toEqual({
      ...state,
      nested: { some: { value: 'STRING' }, another: { value: 0 } }
    })
  })
})
