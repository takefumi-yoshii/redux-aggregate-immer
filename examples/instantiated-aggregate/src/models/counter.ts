import { Modeler } from 'redux-aggregate'
import { wrapImmer } from 'redux-aggregate-immer'

// ______________________________________________________
//
// @ Model

export interface CounterST {
  name: string
  count: number
  bgColor: string
  a: { b: { c: string } }
}
export const CounterModel: Modeler<CounterST> = injects => ({
  name: '',
  count: 0,
  bgColor: '#fff',
  a: { b: { c: 'c' } },
  ...injects
})

// ______________________________________________________
//
// @ Queries

function getCount(state: CounterST): number {
  return state.count
}
function expo2(state: CounterST): number {
  return state.count ** 2
}
export const CounterQR = {
  getCount,
  expo2
}

// ______________________________________________________
//
// @ Mutations for wrapImmer

function increment(state: CounterST): void {
  state.count++
}
function decrement(state: CounterST): void {
  state.count--
}
function setNestedValue(state: CounterST, value: string): void {
  state.a.b.c = value
}
export const CounterMT = wrapImmer({
  increment,
  decrement,
  setNestedValue
})
