# truetype

**Simple JS module to check types more concisely**

Check type of a variable in JavaScript is not so easy.

The builtin operators `typeof`, `instanceof` and other methods are not precise to report the type of a variable.

So, this module aims to check types of variables with more useful returns.

***

## Installation

You can install truetype with NPM, Yarn, [Snipacks](https://www.npmjs.com/package/snipacks), Unpkg CDN...

### NPM

`npm i -S truetype`

### Yarn

`yarn add truetype`

If you are using **JSPM** you can install truetype from NPM:

`jspm i truetype=npm:truetype`

### Snipacks

`snipacks add unpkg truetype.js truetype`

### CDN

```html
<script src="https://unpkg.com/truetype"></script>
```

## Usage

### ES6
```javascript
import truetype from 'truetype'
```

### CommonJS
```javascript
var truetype = require('truetype')
```

### AMD (RequireJS)
```javascript
require(['truetype'], function(truetype) {
	//...
})
```

## Instance

Just call it with your variable as argument:

```javascript
let x = 'foo bar',
	type = truetype(x)
```

`truetype` is a function that returns a custom Class Object with the following props and methods:

### truetype(x).item

The var `x` itself.

### truetype(x).instance()

Returns a string with the `x` constructor name like `Object`, `Array`, `String`, `Number`...

The returned value can be a builtin type or custom constructor name.

```javascript
truetype(1).instance() 		//returns Number

class Foo {
	constructor(x) {
		this.x = x
	}
}

let bar = new Foo(1)

truetype(bar).instance()	//returns Foo
```

### truetype(x).is{Instance}()

Predefined methods that check if `x` type is `{Instance}` and returns a Boolean.

```javascript
truetype({}).isObject() 		//returns true
truetype([]).isArray() 			//returns true
truetype('foo').isString() 		//returns true
truetype(true).isBoolean() 		//returns true
truetype(new Date).isDate() 	//returns true
truetype(1).isNumber() 			//returns true
truetype(/\w/).isRegExp() 		//returns true
```

There are 5 special methods to check values:

```javascript
truetype(1).isInt() 			//returns true
truetype(1.0).isFloat() 		//returns true
truetype(null).isNull()			//returns true
truetype(null).isNotNull()		//returns false
truetype(undefined).isDefined()	//returns false
```

### truetype(x).is(type)

Check if `x` type is equal `type` argument and returns a Boolean.

It's possible to check predefined and custom constructor types.

```javascript
truetype(1).is('String')	//returns false
truetype(1).is('Number')	//returns true
truetype(1).is('Int')		//returns true
truetype(1).is('Float')		//returns false

//Custom types
class Foo {
	constructor(x) {
		this.x = x
	}
}

let bar = new Foo(1)

truetype(bar).is('Foo')		//returns true
```

## TODO

 - Write tests
