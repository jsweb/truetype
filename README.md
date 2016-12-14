# truetype

**Simple JS module to check types more concisely**

Check type of a variable in JavaScript is not so easy.

The builtin operators `typeof`, `instanceof` and other methods are not precise to report the type of a variable.

So, this module aims to check types of variables with more useful returns.

***

## Installation

You can install truetype with Bower or NPM

### Bower

`bower i -S truetype`

### NPM

`npm i -S truetype`

If you are using **JSPM** you can install truetype from NPM:

`jspm i truetype=npm:truetype`

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

### Script tag (DOM / Global)
```html
<script src="path/to/truetype/truetype.umd.js"></script>
```

## Instance

Just call it passing your variable as argument:

```javascript
let x = 'foo bar'
let type = truetype(x)
```

`truetype` is a function that returns a custom Class Object with the following props and methods:

### truetype(x).item

The var `x` itself.

### truetype(x).instance()

Returns a string with the `x` constructor name like `Object`, `Array`, `String`, `Number`...

The returned value can be a builtin type or custom constructor name.

```javascript
truetype(1).instance() 		//returns Number

let Foo = x => this.x = x
let bar = new Foo(1)

truetype(bar).instance()	//returns Foo
```

### truetype(x).is{Type}()

Predefined methods that check if `x` type is `{Type}` and returns a Boolean.

```javascript
truetype({}).isObject() 		//returns true
truetype([]).isArray() 			//returns true
truetype('foo').isString() 		//returns true
truetype(true).isBoolean() 		//returns true
truetype(new Date).isDate() 	//returns true
truetype(1).isNumber() 			//returns true
truetype(1).isInt() 			//returns true
truetype(1).isFloat() 			//returns false
truetype(/\w/).isRegExp() 		//returns true
```

There are 3 special methods to check values:

```javascript
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
let Foo = x => this.x = x
let bar = new Foo(1)

truetype(bar).is('Foo')		//returns true
```

## TODO

 - Write tests
