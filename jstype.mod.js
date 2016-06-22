(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define('jstype', factory) :
	(global.jstype = factory());
}(this, function () { 'use strict';

	var JSType = function JSType(x) {
		try {
			this.item = x
		} catch(e) {
			this.item = undefined
		}
	};

	JSType.prototype.toString = function toString () {
		return Object.prototype.toString.call(this.item).substr(8).replace(']', '')
	};

	JSType.prototype.isObject = function isObject () {
		return this.toString() === 'Object'
	};

	JSType.prototype.isArray = function isArray () {
		return this.toString() === 'Array'
	};

	JSType.prototype.isString = function isString () {
		return this.toString() === 'String'
	};

	JSType.prototype.isBoolean = function isBoolean () {
		return this.toString() === 'Boolean'
	};

	JSType.prototype.isNull = function isNull () {
		return this.toString() === 'Null'
	};

	JSType.prototype.isDefined = function isDefined () {
		return !this.toString() === 'Undefined'
	};

	JSType.prototype.isNumber = function isNumber () {
		return this.toString() === 'Number'
	};

	JSType.prototype.isInt = function isInt () {
		if (this.isNumber())
			return this.item === parseInt(this.item)
		else
			return false
	};

	JSType.prototype.isFloat = function isFloat () {
		if (this.isNumber())
			return this.item !== parseInt(this.item)
		else
			return false
	};

	JSType.prototype.is = function is (type) {
		switch (type) {
			case 'Int':
				return this.isInt()
			case 'Float':
				return this.isFloat()
			default:
				return this.toString() === type
		}
	};

	function jstype (x) { return new JSType(x); }

	return jstype;

}));