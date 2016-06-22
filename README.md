# jstype

**Simple JS module to check types more concisely**

Check type of a variable in JavaScript is not so easy.

The builtin operators `typeof`, `instanceof` and other methods are not precise to report the type of a variable.

So, this module aims to check types of variables with more useful returns.

---

##Installation

With NPM:

    npm i jstype

With Bower:

    bower i jstype

##Usage

###ES6
```javascript
import jstype from 'jstype'
```

###CommonJS
```javascript
var jstype = require('jstype')
```

###AMD (RequireJS)
```javascript
require(['jstype'], function(jstype) {
	//...
})
```

###Script tag (DOM / Global)
```html
<script src="path/to/jstype"></script>
```

###Instance

Just call it passing your variable as argument:

```javascript
let x = 'foo bar'
let tp = jstype(x)
```

`jstype` is a function that returns a custom Class Object with the following props and methods:

####jstype(x).item

The var `x` itself

####jstype(x).toString()

Returns a string with the var type name like `Object`, `Array`, `String`, `Number`...

####jstype(x).is(type)

Check if `x` type is equal `type` argument and returns a Boolean.

```javascript
jstype(1).is('String')	//returns false
jstype(1).is('Number')	//returns true
jstype(1).is('Int')		//returns true
jstype(1).is('Float')	//returns false
```

####jstype(x).is{Type}()

Direct methods that check if `x` type of `{Type}`.

```javascript
jstype({}).isObject()			//returns true
jstype([]).isArray()			//returns true
jstype('foo').isString()		//returns true
jstype(true).isBoolean()		//returns true
jstype(null).isNull()			//returns true
jstype(undefined).isDefined()	//returns false :)
jstype(1).isNumber()			//returns true
jstype(1).isInt()				//returns true
jstype(1).isFloat()				//returns false
```

###Module

You can choose one of three options according your needs.

 - **jstype.js** - main source to use with ES2015 applications/enviroments
 - **jstype.mod.js** - module in Universal Module Definition format to use with AMD, CommonJS, global, browser or any other module loader or compatible JS enviroment
 - **jstype.min.js** - minified with [uglify-js](https://github.com/mishoo/UglifyJS2), compatible with script tag and any module loader, suitable for production, mainly on browsers
