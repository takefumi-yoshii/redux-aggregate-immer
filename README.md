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
function setNestedValue (s, value) {
  return {
    ...state,
    nested: {
      ...state.nested,
      some: {
        ...state.nested.some,
        value
      }
    }
  }
}
export const Mutations = {
  increment,
  decrement,
  setNestedValue
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
function setNestedValue (s, value) {
  s.nested.some.value = value
}
export const Mutations = wrapImmer({
  increment,
  decrement,
  setNestedValue
})
```
