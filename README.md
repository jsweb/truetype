# @jsweb/truetype

**Simple JS module to check types more concisely**

Check types in JavaScript is not so easy.

The builtin operators `typeof`, `instanceof` and other methods are not precise to report the exact type of a value.

So, this module aims to check types of variables with more useful returns.

***

## Installation

You can install with NPM, Yarn or Unpkg CDN:

```
npm i -S @jsweb/truetype
```

```
yarn add @jsweb/truetype
```

```html
<script src="https://unpkg.com/@jsweb/truetype"></script>
```

## Usage

### ES6
```javascript
import truetype from '@jsweb/truetype'
```

### CommonJS
```javascript
const truetype = require('@jsweb/truetype')
```

### CDN

If you install it via CDN, `truetype` object will be available at global window scope.

## Instance

Just call it with your value as argument:

```javascript
const type = truetype('foo bar')
```

`truetype` is a function that returns an Object that conatains the following props and methods:

## Props

### truetype(x).value

The value of `x` itself.

### truetype(x).instance

Returns a string with the `x` constructor name like `Object`, `Array`, `String`, `Number`, ...

The returned value can be a builtin or custom constructor name.

```javascript
truetype(1).instance  // returns Number

class Foo {
  constructor(x) {
    this.x = x
  }
}

const bar = new Foo(1)

truetype(bar).instance  // returns Foo
```

### truetype(x).is${Instance}

Predefined getters that check if `x` type is native `${Instance}` and returns a Boolean.

```javascript
truetype({}).isObject         // returns true
truetype([]).isArray          // returns true
truetype('foo').isString      // returns true
truetype(false).isBoolean     // returns true
truetype(new Date).isDate     // returns true
truetype(1).isNumber          // returns true
truetype(/\w/).isRegExp       // returns true
truetype(() => {}).isFunction // returns true
```

There are 5 special props to check values:

```javascript
truetype(1).isInteger         // returns true
truetype(1.0).isFloat         // returns true
truetype(null).isNull         // returns true
truetype(null).isNotNull      // returns false
truetype(null).isValid        // returns false
truetype(undefined).isDefined // returns false
```

## Methods

### truetype(x).is(type)

Check if `x` type is equal `type` string argument and returns a Boolean.

It's possible to check predefined and custom constructor types.

```javascript
truetype(1).is('String')  // returns false
truetype(1).is('Number')  // returns true
truetype(1).is('Integer') // returns true
truetype(1).is('Float')   // returns false

//Custom types
class Foo {
	constructor(x) {
		this.x = x
	}
}

const foo = new Foo(1)

truetype(foo).is('Foo') // returns true
```

### truetype(x).valueOf()

Simply returns the value itself, like native method.

### truetype(x).toString()

Simply proxy to `value.toString()` native method.
