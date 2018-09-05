/**
 * @author Alex Bruno Cáceres
 * @email git.alexbr@outlook.com
 * @date 2016-06-21 01:16:15
 * @desc Simple JS module to check types more concisely
 */

(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.truetype=b()})(this,function(){"use strict";return function(a){return{get isDefined(){return a!==void 0},get isNull(){return null===a},get isNotNull(){return null!==a},get isValid(){return this.isDefined&&this.isNotNull},get instance(){return this.isValid?a.constructor.name:this.isNull?"Null":"Undefined"},get isBoolean(){return"Boolean"===this.instance},get isString(){return"String"===this.instance},get isNumber(){return"Number"===this.instance},get isInteger(){return this.isNumber&&a===parseInt(a)},get isFloat(){return this.isNumber&&a!==parseInt(a)},get isObject(){return"Object"===this.instance},get isArray(){return Array.isArray(a)},get isDate(){return"Date"===this.instance},get isRegExp(){return"RegExp"===this.instance},get isFunction(){return"Function"===this.instance},get value(){return a},is(a){return"Integer"===a?this.isInteger:"Float"===a?this.isFloat:this.instance===a},valueOf(){return a},toString(){return a.toString()}}}});