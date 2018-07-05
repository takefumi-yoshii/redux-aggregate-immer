import immer from 'immer'

type A1<T> = T extends (a1: infer I, ...rest: any[]) => any ? I : never
type A2<T> = T extends (a1: any, a2: infer I, ...rest: any[]) => any ? I : never
type KeyMap = { [K: string]: any }
type MT<T, R> = (state: A1<T>) => R
type MTPL<T, R> = (state: A1<T>, payload: A2<T>) => R
type Mutation<T, R> = MT<T, R> | MTPL<T, R>
type Mutations<T, R> = { readonly [K in keyof T]: Mutation<T[K], R> }
type ImmerWrapped<T> = T extends MT<T, void> ? MT<T, A1<T>> : MTPL<T, A1<T>>
type WrapImmerReturn<T> = { readonly [K in keyof T]: ImmerWrapped<T[K]> }
declare function wrapImmer<M extends KeyMap & Mutations<M, void>>(
  imutations: M
): WrapImmerReturn<M>

export { KeyMap, Mutations, WrapImmerReturn, wrapImmer, immer }
