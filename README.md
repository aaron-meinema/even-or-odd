# even-or-odd

Tiny, zero-dependency utility to check whether an integer is even or odd.

## Install

```sh
npm install even-or-odd
```

## Usage

```ts
import { evenOrOdd, Is } from "even-or-odd";

evenOrOdd(4) === Is.Even; // true
evenOrOdd(3) === Is.Odd; // true
evenOrOdd(1.5); // throws TypeError
```

## API

### `evenOrOdd(n: number): Is`

Returns `Is.Even` or `Is.Odd` depending on the parity of `n`. Throws `TypeError` if `n` is not an integer.

### `Is`

Enum with members `Is.Even` and `Is.Odd`.

## Development

```sh
npm install
npm test     # run tests
npm run build  # compile to dist/
```

## License

MIT
