# truetype

**Simple JS module to check types more concisely**

Check type of a variable in JavaScript is not so easy.

The builtin operators `typeof`, `instanceof` and other methods are not precise to report the type of a variable.

So, this module aims to check types of variables with more useful returns.

---

##Installation

With NPM:

    npm i -S truetype

With Bower:

    bower i -S truetype

##Usage

###ES6
```javascript
import truetype from 'truetype'
```

###CommonJS
```javascript
var truetype = require('truetype')
```

###AMD (RequireJS)
```javascript
require(['truetype'], function(truetype) {
	//...
})
```

###Script tag (DOM / Global)
```html
<script src="path/to/truetype"></script>
```

###Instance

Just call it passing your variable as argument:

```javascript
let x = 'foo bar'
let type = truetype(x)
```

`truetype` is a function that returns a custom Class Object with the following props and methods:

####truetype(x).item

The var `x` itself.

####truetype(x).toString()

Returns a string with the JS builtin var type name like `Object`, `Array`, `String`, `Number`...

####truetype(x).instance()

Returns a string with the var constructor name.

The returned value will be the same as `toString` if tested var is a builtin type object, else will be the custom constructor name.

```javascript
truetype(1).toString() 		//returns Number
truetype(1).instance() 		//returns Number

let Foo = x => this.x = x
let bar = new Foo(1)

truetype(bar).toString() 	//returns Object
truetype(bar).instance()	//returns Foo
```

####truetype(x).is{Type}()

Predefined methods that check if `x` type is `{Type}`.

```javascript
truetype({}).isObject() 				//returns true
truetype([]).isArray() 					//returns true
truetype('foo').isString() 			//returns true
truetype(true).isBoolean() 			//returns true
truetype(new Date).isDate() 		//returns true
truetype(1).isNumber() 					//returns true
truetype(1).isInt() 						//returns true
truetype(1).isFloat() 					//returns false
truetype(/\w/).isRegExp() 			//returns true
truetype(null).isNull()					//returns true
truetype(undefined).isDefined()	//returns false :)
```

####truetype(x).is(type)

Check if `x` type is equal `type` argument and returns a Boolean.

It's possible to check predefined and custom constructor types.

```javascript
truetype(1).is('String')	//returns false
truetype(1).is('Number')	//returns true
truetype(1).is('Int')			//returns true
truetype(1).is('Float')		//returns false

//Custom types
let Foo = (x) => this.x = x
let bar = new Foo(1)

truetype(bar).is('Foo')		//returns true
```

###Module

You can choose one of three options according your needs.

 - **truetype.js** - main source to use with ES2015 applications/enviroments
 - **truetype.umd.js** - Universal Module Definition format to use with AMD, CommonJS, global, browser or any other module loader or compatible JS enviroment
 - **truetype.min.js** - minified with [uglify-js](https://github.com/mishoo/UglifyJS2), compatible with script tag and any module loader, suitable for production, mainly on browsers

##TODO

 - Write tests
