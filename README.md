# @jsweb/truetype

Simple JS module to check types more consistently.

Check types in JavaScript is not so easy...

The builtin operators `typeof`, `instanceof` and other methods are not precise enough to report the exact type of a value.

So, this module aims to check types of variables with more useful returns.

See tests at [https://truetype.jsweb.app](https://truetype.jsweb.app)

![npm-package](https://img.shields.io/badge/npm-package-blue.svg?style=for-the-badge)
![es6-module](https://img.shields.io/badge/es6-module-blue.svg?style=for-the-badge)
![tests-mocha](https://img.shields.io/badge/tests-mocha-blue.svg?style=for-the-badge)

## New in v4.0.0

Now, its a full ES module, there is no UMD or CommonJS version.

In modern JS development ES modules are the pattern, already supported in newer versions of Node.js and modern borwsers natively.

Backward compatibility is not a concern here. If you use a module bundler (like Webpack or Rollup) to transpile your code, the result will be compatible according to your setup.

---

## Installation

You can install with NPM, Yarn or Unpkg CDN:

`npm i -S @jsweb/truetype`

`yarn add @jsweb/truetype`

## Usage

### ES6

Tree shaking (since v3.0.0):

```javascript
import { isInteger, isDate, isNotNull } from '@jsweb/truetype'
```

### From CDN (installation not required)

```html
<script type="module">
  import { isNumber } from 'https://unpkg.com/@jsweb/truetype'

  const number = isNumber(1)
</script>
```

## Methods

### isDefined(value: any): boolean

Check if a value is not undefined.

### isNull(value: any): boolean

Check if value is null.

### isNotNull(value: any): boolean

Check if value is not null.

### isValid(value: any): boolean

Check if value is "valid" (is not null or undefined).

### instance(value: any): string

Get the constructor name of the value.

Returns a string with a type name like `Object`, `Array`, `String`, `Number`, ...

Can be a native or custom constructor name.

```javascript
instance(1) // returns Number

class Foo {
  constructor(x) {
    this.x = x
  }
}

const bar = new Foo(1)

instance(bar) // returns Foo
```

### is(value: any, type: string): boolean

Check if `value` is of `type`.

Can be a native or custom constructor name.

```javascript
is({}, 'Object') // returns true
is([], 'Array') // returns true
is('foo', 'String') // returns true
is(false, 'Boolean') // returns true
// ...

class Foo {
  constructor(x) {
    this.x = x
  }
}

const bar = new Foo(1)

is(bar, 'Foo') // returns true
```

### isBoolean(value: any): boolean

Check if value is a boolean.

### isString(value: any): boolean

Check if value is a string.

### isNumber(value: any): boolean

Check if value is a number.

### isInteger(value: any): boolean

Check if value is an integer number.

### isFloat(value: any): boolean

Check if value is a float point number.

### isObject(value: any): boolean

Check if value is an object.

### isArray(value: any): boolean

Check if value is an Array.

### isDate(value: any): boolean

Check if value is a Date object.

### isRegExp(value: any): boolean

Check if value is a Regular Expression.

### isFunction(value: any): boolean

Check if value is a function.

### isEmpty(value: string | array | object): boolean

This is a bonus utility.

Check if value is empty.

Only for string, array and objects. Any other type will return false.
