import immer from 'immer'

type R<T> = T extends (...rest: any[]) => infer I ? I : never
type A1<T> = T extends (a1: infer I, ...rest: any[]) => any ? I : never
type A2<T> = T extends (a1: any, a2: infer I, ...rest: any[]) => any ? I : never
type KeyMap = { [K: string]: any }
type MMT<T> = R<T> extends void ? (state: A1<T>) => void : never
type MMTPL<T> = R<T> extends void ? (state: A1<T>, payload: A2<T>) => void : never
type IMT<T> = (state: A1<T>) => A1<T>
type IMTPL<T> = (state: A1<T>, payload: A2<T>) => A1<T>
type MutableMutation<T> = MMT<T> | MMTPL<T>
type MutableMutations<T> = { readonly [K in keyof T]: MutableMutation<T[K]> }
type ImmutableMutation<T> = T extends MMT<T> ? IMT<T> : T extends MMTPL<T> ? IMTPL<T> : never
type ImmutableMutations<T> = { readonly [K in keyof T]: ImmutableMutation<T[K]> }
declare function wrapImmer<M extends KeyMap & MutableMutations<M>>(
  mutableMutations: M
): ImmutableMutations<M>

export { KeyMap, MutableMutations, ImmutableMutations, wrapImmer, immer }
