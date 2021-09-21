# randomize-array

Get each and every item in array, randomly.

> This package is [ESM](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) only.

## Install

```
$ npm install @dtjv/randomize-array
```

## Usage

```javascript
import { randomizeArray } from '@dtjv/randomize-array'

const getCharacter = randomizeArray(['🍩', '☕️', '🤓'])

getCharacter() //-> '☕️'
getCharacter() //-> '🤓'
getCharacter() //-> '🍩'
getCharacter() //-> undefined
```

## API

### randomizeArray(array, options?)

```javascript
import { randomizeArray } from '@dtjv/randomize-array'
```

Returns a function, where each invocation returns a unique random value from
`array` until all values are returned. Subsequent calls return `undefined`
(unless the [reset](#optionsreset) option is set to `true`, or
[restart](#restart) is called).

#### array

Type: `unknown[]`\
Default: `[]`

Array of values to randomly access.

#### options

Type: `Object`

##### options.reset

Type: `boolean`\
Default: `false`

Makes all values of `array` available for random selection once all values have
been retrieved.

### restart()

```javascript
import { restart } from '@dtjv/randomize-array'
```

Makes all values of `array` available for random selection.

## Author

- [David Valles](https://dtjv.io)

## License

[MIT License](LICENSE)
