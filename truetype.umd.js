(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define('truetype', factory) :
	(global.truetype = factory());
}(this, function () { 'use strict';

	var TrueType = function TrueType(x) {
		try {
			this.item = x
		} catch(e) {
			this.item = undefined
		}
	};

	TrueType.prototype.toString = function toString () {
		return Object.prototype.toString.call(this.item).substr(8).replace(']', '')
	};

	TrueType.prototype.instance = function instance () {
		return this.item.constructor.name
	};

	TrueType.prototype.isObject = function isObject () {
		return this.toString() === 'Object'
	};

	TrueType.prototype.isArray = function isArray () {
		return this.toString() === 'Array'
	};

	TrueType.prototype.isString = function isString () {
		return this.toString() === 'String'
	};

	TrueType.prototype.isBoolean = function isBoolean () {
		return this.toString() === 'Boolean'
	};

	TrueType.prototype.isDate = function isDate () {
		return this.toString() === 'Date'
	};

	TrueType.prototype.isRegExp = function isRegExp () {
		return this.toString() === 'RegExp'
	};

	TrueType.prototype.isNull = function isNull () {
		return this.toString() === 'Null'
	};

	TrueType.prototype.isDefined = function isDefined () {
		return this.toString() !== 'Undefined'
	};

	TrueType.prototype.isNumber = function isNumber () {
		return this.toString() === 'Number'
	};

	TrueType.prototype.isInt = function isInt () {
		if (this.isNumber())
			return this.item === parseInt(this.item)
		else
			return false
	};

	TrueType.prototype.isFloat = function isFloat () {
		if (this.isNumber())
			return this.item !== parseInt(this.item)
		else
			return false
	};

	TrueType.prototype.is = function is (type) {
		switch (type) {
			case 'Int':
				return this.isInt()
			case 'Float':
				return this.isFloat()
			default:
				return this.toString() === type || this.toInstance() === type
		}
	};

	function truetype (x) { return new TrueType(x); }

	return truetype;

}));