# redux-aggregate-immer

[![Latest Version](https://img.shields.io/badge/npm-redux_aggregate_immer-C12127.svg)](https://www.npmjs.com/package/redux-aggregate-immer)

The helper module for [redux-aggregate](https://www.npmjs.com/package/redux-aggregate).
Below code be able to write more comfortable, with `wrapImmer`.

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
    ...s,
    nested: {
      ...s.nested,
      some: {
        ...s.nested.some,
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

Mutable mutations will be convert to immutable mutations.
To be careful not to return state at those mutation.

```javascript
//
// @ with wrapImmer

import { wrapImmer } from 'redux-aggregate-immer'

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
