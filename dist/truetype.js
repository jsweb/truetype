/**
 * @author Alex Bruno Cáceres
 * @email git.alexbr@outlook.com
 * @date 2016-06-21 01:16:15
 * @desc Simple JS module to generate random id/key/hash in various formats, including UUID
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.truetype = factory());
}(this, (function () { 'use strict';

  function truetype(a){return {get isDefined(){return a!==void 0},get isNull(){return null===a},get isNotNull(){return null!==a},get isValid(){return this.isDefined&&this.isNotNull},get instance(){return this.isValid?a.constructor.name:this.isNull?"Null":"Undefined"},get isBoolean(){return "Boolean"===this.instance},get isString(){return "String"===this.instance},get isNumber(){return "Number"===this.instance},get isInteger(){return this.isNumber&&a===parseInt(a)},get isFloat(){return this.isNumber&&a!==parseInt(a)},get isObject(){return "Object"===this.instance},get isArray(){return Array.isArray(a)},get isDate(){return "Date"===this.instance},get isRegExp(){return "RegExp"===this.instance},get isFunction(){return "Function"===this.instance},get value(){return a},is(a){return "Integer"===a?this.isInteger:"Float"===a?this.isFloat:this.instance===a},valueOf(){return a},toString(){return a.toString()}}}

  return truetype;

})));
