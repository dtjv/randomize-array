export interface Options {
  /**
  Makes all values of `array` available for random selection once all values have been retrieved.

	@default false
	*/
  readonly reset?: boolean
}

/**
Get each and every item in array, randomly.

@returns Returns a function, where each invocation returns a unique random value from `array` until all values are returned. Subsequent calls return `undefined` (unless the `reset` option is set to `true`, or `restart` is called).

@param array - Values to randomly access

@example
```
import { randomizeArray } from '@dtjv/randomize-array'

const getNumber = randomizeArray([1, 2, 3])

getNumber() //-> 2
getNumber() //-> 3
getNumber() //-> 1
getNumber() //-> undefined
```
*/
export function randomizeArray<T>(
  array: readonly T[],
  options?: Options
): () => T

/**
Makes all values of `array` available for random selection.

@example
```
import { randomizeArray, restart } from '@dtjv/randomize-array'

const getNumber = randomizeArray([1, 2, 3])

getNumber() //-> 2
getNumber() //-> 3

restart()

getNumber() //-> 3
getNumber() //-> 1
getNumber() //-> 2
getNumber() //-> undefined
```
*/
export function restart(): void
