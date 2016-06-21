(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['exports'], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports);
		global.jstype = mod.exports;
	}
})(this, function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();

	var JSType = function () {
		function JSType(x) {
			_classCallCheck(this, JSType);

			this.item = x;
		}

		_createClass(JSType, [{
			key: 'toString',
			value: function toString() {
				return Object.prototype.toString.call(this.item).substr(8).replace(']', '');
			}
		}, {
			key: 'is',
			value: function is(type) {
				return this.toString() === type;
			}
		}, {
			key: 'isObject',
			value: function isObject() {
				return this.is('Object');
			}
		}, {
			key: 'isArray',
			value: function isArray() {
				return this.is('Array');
			}
		}, {
			key: 'isString',
			value: function isString() {
				return this.is('String');
			}
		}, {
			key: 'isNumber',
			value: function isNumber() {
				return this.is('Number');
			}
		}, {
			key: 'isBoolean',
			value: function isBoolean() {
				return this.is('Boolean');
			}
		}, {
			key: 'isNull',
			value: function isNull() {
				return this.is('Null');
			}
		}, {
			key: 'isDefined',
			value: function isDefined() {
				return !this.is('Undefined');
			}
		}, {
			key: 'instance',
			value: function instance(obj) {
				return this.item instanceof obj;
			}
		}, {
			key: 'isInteger',
			value: function isInteger() {
				if (this.isNumber()) return this.item === parseInt(this.item);else return false;
			}
		}, {
			key: 'isFloat',
			value: function isFloat() {
				if (this.isNumber()) return this.item !== parseInt(this.item);else return false;
			}
		}]);

		return JSType;
	}();

	exports.default = function (x) {
		return new JSType(x);
	};
});
