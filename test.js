/* global test, expect */

import { randomizeArray, restart } from './index.js'

test('should return a function', () => {
  expect(typeof randomizeArray([])).toEqual('function')
})

test('should handle empty array', () => {
  expect(randomizeArray([])()).toBeUndefined()
})

test('should handle no array', () => {
  expect(randomizeArray()()).toBeUndefined()
})

test('should return each value in original array', () => {
  const numbers = [1, 2, 3, 4]
  const getNum = randomizeArray(numbers)
  const actuals = []

  numbers.forEach(() => actuals.push(getNum()))

  expect(actuals.sort((a, b) => a - b)).toEqual(numbers)
})

test('should return undefined after all values returned', () => {
  const numbers = [1, 2, 3, 4]
  const getNum = randomizeArray(numbers)

  numbers.forEach(() => getNum())

  expect(getNum()).toBeUndefined()
})

test('should restart once all values returned', () => {
  const numbers = [1, 2, 3, 4]
  const getNum = randomizeArray(numbers, { reset: true })
  const actuals = []

  numbers.forEach(() => getNum())
  numbers.forEach(() => actuals.push(getNum()))

  expect(actuals.sort((a, b) => a - b)).toEqual(numbers)
})

test('should restart, making all values of original array available', () => {
  const numbers = [1, 2, 3, 4]
  const getNum = randomizeArray(numbers)
  const actuals = []

  getNum()
  getNum()
  restart()
  numbers.forEach(() => actuals.push(getNum()))

  expect(actuals.sort((a, b) => a - b)).toEqual(numbers)
})
