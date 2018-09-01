'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var assert = require('assert');
var type = _interopDefault(require('./truetype'));

describe('@jsweb/truetype', () => {
  it('import should return a Function', () => {
    const test = type(type);
    assert.equal(test.isFunction, true);
    assert.equal(test.is('Function'), true);
  });

  it('instance should return an Object', () => {
    const test = type();
    assert.equal(type(test).instance, 'Object');
  });

  describe('Should validate', () => {
    it('Undefined', () => {
      const test = type();
      assert.equal(test.isDefined, false);
      assert.equal(test.isValid, false);
      assert.equal(test.isNull, false);
      assert.equal(test.isNotNull, true);
      assert.equal(test.instance, 'Undefined');
      assert.equal(test.is('Undefined'), true);
    });

    it('Null', () => {
      const test = type(null);
      assert.equal(test.isDefined, true);
      assert.equal(test.isValid, false);
      assert.equal(test.isNull, true);
      assert.equal(test.isNotNull, false);
      assert.equal(test.instance, 'Null');
      assert.equal(test.is('Null'), true);
    });

    it('a Boolean', () => {
      const test = type(false);
      assert.equal(test.isDefined, true);
      assert.equal(test.isValid, true);
      assert.equal(test.isNull, false);
      assert.equal(test.isNotNull, true);
      assert.equal(test.isBoolean, true);
      assert.equal(test.instance, 'Boolean');
      assert.equal(test.is('Boolean'), true);
    });

    it('a String', () => {
      const test = type('string');
      assert.equal(test.isDefined, true);
      assert.equal(test.isValid, true);
      assert.equal(test.isNull, false);
      assert.equal(test.isNotNull, true);
      assert.equal(test.isString, true);
      assert.equal(test.instance, 'String');
      assert.equal(test.is('String'), true);
    });

    it('a Number', () => {
      const test = type(1);
      assert.equal(test.isDefined, true);
      assert.equal(test.isValid, true);
      assert.equal(test.isNull, false);
      assert.equal(test.isNotNull, true);
      assert.equal(test.isNumber, true);
      assert.equal(test.instance, 'Number');
      assert.equal(test.is('Number'), true);
    });

    it('a Integer', () => {
      const test = type(1);
      assert.equal(test.isDefined, true);
      assert.equal(test.isValid, true);
      assert.equal(test.isNull, false);
      assert.equal(test.isNotNull, true);
      assert.equal(test.isInteger, true);
      assert.equal(test.instance, 'Number');
      assert.equal(test.is('Integer'), true);
    });

    it('a Float', () => {
      const test = type(1.1);
      assert.equal(test.isDefined, true);
      assert.equal(test.isValid, true);
      assert.equal(test.isNull, false);
      assert.equal(test.isNotNull, true);
      assert.equal(test.isFloat, true);
      assert.equal(test.instance, 'Number');
      assert.equal(test.is('Float'), true);
    });

    it('an Object', () => {
      const test = type({});
      assert.equal(test.isDefined, true);
      assert.equal(test.isValid, true);
      assert.equal(test.isNull, false);
      assert.equal(test.isNotNull, true);
      assert.equal(test.isObject, true);
      assert.equal(test.instance, 'Object');
      assert.equal(test.is('Object'), true);
    });

    it('an Array', () => {
      const test = type([]);
      assert.equal(test.isDefined, true);
      assert.equal(test.isValid, true);
      assert.equal(test.isNull, false);
      assert.equal(test.isNotNull, true);
      assert.equal(test.isArray, true);
      assert.equal(test.instance, 'Array');
      assert.equal(test.is('Array'), true);
    });

    it('a Date', () => {
      const test = type(new Date);
      assert.equal(test.isDefined, true);
      assert.equal(test.isValid, true);
      assert.equal(test.isNull, false);
      assert.equal(test.isNotNull, true);
      assert.equal(test.isDate, true);
      assert.equal(test.instance, 'Date');
      assert.equal(test.is('Date'), true);
    });

    it('a RegExp', () => {
      const test = type(/a/);
      assert.equal(test.isDefined, true);
      assert.equal(test.isValid, true);
      assert.equal(test.isNull, false);
      assert.equal(test.isNotNull, true);
      assert.equal(test.isRegExp, true);
      assert.equal(test.instance, 'RegExp');
      assert.equal(test.is('RegExp'), true);
    });

    it('a Function', () => {
      const test = type(() => {});
      assert.equal(test.isDefined, true);
      assert.equal(test.isValid, true);
      assert.equal(test.isNull, false);
      assert.equal(test.isNotNull, true);
      assert.equal(test.isFunction, true);
      assert.equal(test.instance, 'Function');
      assert.equal(test.is('Function'), true);
    });

    it('any type', () => {
      const inst = new Promise(() => {}, () => {});
      const test = type(inst);
      assert.equal(test.isDefined, true);
      assert.equal(test.isValid, true);
      assert.equal(test.isNull, false);
      assert.equal(test.isNotNull, true);
      assert.equal(test.instance, 'Promise');
      assert.equal(test.is('Promise'), true);
    });

    it('custom objects', () => {
      class Custom {}
      const inst = new Custom();
      const test = type(inst);
      assert.equal(test.isDefined, true);
      assert.equal(test.isValid, true);
      assert.equal(test.isNull, false);
      assert.equal(test.isNotNull, true);
      assert.equal(test.instance, 'Custom');
      assert.equal(test.is('Custom'), true);
    });
  });

  describe('Should expose', () => {
    it('its value', () => {
      const test = type(1);
      assert.equal(test.value, 1);
      assert.equal(test.valueOf(), 1);
    });

    it('toString method', () => {
      const test = type(1);
      assert.equal(test.toString(), '1');
    });
  });
});
