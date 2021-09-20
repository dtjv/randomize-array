import randomInteger from 'random-int'
import getRange from 'get-range'
import arrayDiffer from 'array-differ'

let reset = false
let usedIndices = []

export const randomizeArray = (array = [], options) => {
  reset = !!options?.reset

  return () => {
    const allIndices = [...getRange({ end: array.length })]
    const unusedIndices = arrayDiffer(allIndices, usedIndices)

    let indices = []

    if (!unusedIndices.length && reset) {
      restart()
      indices = allIndices
    } else {
      indices = unusedIndices
    }

    if (indices.length) {
      const randomIdx = randomInteger(indices.length - 1)
      const arrayIdx = indices[randomIdx]

      usedIndices.push(arrayIdx)

      return array[arrayIdx]
    }

    return undefined
  }
}

export const restart = () => {
  usedIndices = []
}
