# is-chanon
[![NPM](https://img.shields.io/npm/l/is-chanon.svg)](https://github.com/chanonroy/is-chanon/blob/master/LICENSE)
[![CircleCI branch](https://img.shields.io/circleci/project/github/chanonroy/is-chanon/master.svg)](https://circleci.com/gh/chanonroy/is-chanon)
[![npm](https://img.shields.io/npm/v/is-chanon.svg)](https://www.npmjs.com/package/is-chanon)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

A simple stateless function to determine whether a string contains my name (Chanon) or not. 

This is more of a parody module to help me test out best practices with CI/CD, npm publishing, and semantic versioning.


## Usage

Install the package
```
yarn add is-chanon
```

Use the package as needed
```js
const isChanon = require('is-chanon')

isChanon('Chanon');     // true
isChanon('chanon');     // true
isChanon('Charles');    // false
isChanon('channon');    // false
```

## Testing

Install dependencies
```
yarn
```

Run the Jest tests
```
yarn test
```
