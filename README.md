# is-chanon &middot; ![npm](https://img.shields.io/npm/v/is-chanon.svg)

A simple stateless function to determine whether a string contains my name (`Chanon`) or not. 

This is more of a parody module to help me test out best practices with CI/CD, npm publishing, and semantic versioning.



## Usage

Install the package
```
yarn add is-chanon
```

Use the package as needed
```
const isChanon = require('is-chanon')

isChanon('Chanon');     // true
isChanon('chanon');     // true
isChanon('John');       // false
isChanon('channon');    // false
```
