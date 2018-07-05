# redux-aggregate-immer

[![Latest Version](https://img.shields.io/badge/npm-redux_aggregate_immer-C12127.svg)](https://www.npmjs.com/package/redux-aggregate-immer)

The helper module for [redux-aggregate](https://www.npmjs.com/package/redux-aggregate).

```javascript

const initialState = {
  count: 0,
  nested: { some: { value: 'string' } }
}
//
// @ Mutations

function increment(s) {
  return { ...s, count: s.count + 1 }
}
function decrement(s) {
  return { ...s, count: s.count - 1 }
}
function setCount (s, value) {
  return { ...s, count: value }
}
export const Mutations = {
  increment,
  decrement,
  setCount
}
```
with `wrapImmer`, above code, now be able to write more comfortable.

```javascript

const initialState = {
  count: 0,
  nested: { some: { value: 'string' } }
}
//
// @ Mutations for wrapImmer

function increment(s) {
  s.count++
}
function decrement(s) {
  s.count--
}
function setCount (s, value) {
  s.nested.some.value = value
}
export const Mutations = wrapImmer({
  increment,
  decrement,
  setCount
})
```
