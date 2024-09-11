# json-glue

[![CodeQL](https://github.com/chathurabuddi/json-glue/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/chathurabuddi/json-glue/actions/workflows/github-code-scanning/codeql)
[![codecov](https://codecov.io/gh/chathurabuddi/json-glue/branch/main/graph/badge.svg?token=iLMbM9uKae)](https://codecov.io/gh/chathurabuddi/json-glue)
![GitHub Release](https://img.shields.io/github/v/release/chathurabuddi/json-glue)
![NPM Version](https://img.shields.io/npm/v/json-glue)

A lightweight utility to recursively merge two JSON objects in TypeScript. Supports replacing primitive values, arrays, and combining objects deeply.

### Installation

You can install this package using npm:

```sh
npm install json-glue
```

### Usage

```typescript
import { merge } from 'json-glue';

const obj1 = { a: 1, b: 2, c: { d: 3, e: 4 } };
const obj2 = { a: 5, c: { d: 6, f: 7 } };

const result = merge(obj1, obj2);
console.log(result);
```

Output:

```json
{ "a": 5, "b": 2, "c": { "d": 6, "e": 4, "f": 7 } }
```

### License

This project is licensed under the ISC License.

### Bugs
For bug reports, please visit the [issues page](https://github.com/chathurabuddi/json-glue/issues).

### Contributing
If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'fix: fix the bug'`).
4. Push the branch (`git push origin feature/your-feature`).
5. Open a pull request.

For major changes, please open an issue first to discuss what you would like to change.
