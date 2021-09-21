import { expectType } from 'tsd'
import { randomizeArray } from './index.js'

expectType<() => number>(randomizeArray([1, 2, 3, 4]))
expectType<() => string | number>(randomizeArray([1, '2', 3, 4]))
