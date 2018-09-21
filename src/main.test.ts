import { equal } from 'assert';
import type from './main';

describe('@jsweb/truetype', () => {
  it('import should return a Function', () => {
    const test = type(type);
    equal(true, test.isFunction);
    equal(true, test.is('Function'));
  });

  it('instance should return an Object', () => {
    const test = type(0);
    equal('Object', type(test).instance);
  });

  describe('Should validate', () => {
    it('Undefined', () => {
      const test = type(undefined);
      equal(false, test.isDefined);
      equal(false, test.isValid);
      equal(false, test.isNull);
      equal(true, test.isNotNull);
      equal('Undefined', test.instance);
      equal(true, test.is('Undefined'));
    });

    it('Null', () => {
      const test = type(null);
      equal(true, test.isDefined);
      equal(false, test.isValid);
      equal(true, test.isNull);
      equal(false, test.isNotNull);
      equal('Null', test.instance);
      equal(true, test.is('Null'));
    });

    it('a Boolean', () => {
      const test = type(false);
      equal(true, test.isDefined);
      equal(true, test.isValid);
      equal(false, test.isNull);
      equal(true, test.isNotNull);
      equal(true, test.isBoolean);
      equal(test.instance, 'Boolean');
      equal(test.is('Boolean'), true);
    });

    it('a String', () => {
      const test = type('string');
      equal(true, test.isDefined);
      equal(true, test.isValid);
      equal(false, test.isNull);
      equal(true, test.isNotNull);
      equal(true, test.isString);
      equal('String', test.instance);
      equal(true, test.is('String'));
    });

    it('a Number', () => {
      const test = type(1);
      equal(true, test.isDefined);
      equal(true, test.isValid);
      equal(false, test.isNull);
      equal(true, test.isNotNull);
      equal(true, test.isNumber);
      equal('Number', test.instance);
      equal(true, test.is('Number'));
    });

    it('a Integer', () => {
      const test = type(1);
      equal(true, test.isDefined);
      equal(true, test.isValid);
      equal(false, test.isNull);
      equal(true, test.isNotNull);
      equal(true, test.isInteger);
      equal('Number', test.instance);
      equal(true, test.is('Integer'));
    });

    it('a Float', () => {
      const test = type(1.1);
      equal(true, test.isDefined);
      equal(true, test.isValid);
      equal(false, test.isNull);
      equal(true, test.isNotNull);
      equal(true, test.isFloat);
      equal('Number', test.instance);
      equal(true, test.is('Float'));
    });

    it('an Object', () => {
      const test = type({});
      equal(true, test.isDefined);
      equal(true, test.isValid);
      equal(false, test.isNull);
      equal(true, test.isNotNull);
      equal(true, test.isObject);
      equal('Object', test.instance);
      equal(true, test.is('Object'));
    });

    it('an Array', () => {
      const test = type([]);
      equal(true, test.isDefined);
      equal(true, test.isValid);
      equal(false, test.isNull);
      equal(true, test.isNotNull);
      equal(true, test.isArray);
      equal('Array', test.instance);
      equal(true, test.is('Array'));
    });

    it('a Date', () => {
      const test = type(new Date());
      equal(true, test.isDefined);
      equal(true, test.isValid);
      equal(false, test.isNull);
      equal(true, test.isNotNull);
      equal(true, test.isDate);
      equal('Date', test.instance);
      equal(true, test.is('Date'));
    });

    it('a RegExp', () => {
      const test = type(/a/);
      equal(true, test.isDefined);
      equal(true, test.isValid);
      equal(false, test.isNull);
      equal(true, test.isNotNull);
      equal(true, test.isRegExp);
      equal('RegExp', test.instance);
      equal(true, test.is('RegExp'));
    });

    it('a Function', () => {
      const test = type(() => null);
      equal(true, test.isDefined);
      equal(true, test.isValid);
      equal(false, test.isNull);
      equal(true, test.isNotNull);
      equal(true, test.isFunction);
      equal('Function', test.instance);
      equal(true, test.is('Function'));
    });

    it('any type', () => {
      const inst = new Promise((done, fail) => 0 ? done() : fail());
      const test = type(inst);
      equal(true, test.isDefined);
      equal(true, test.isValid);
      equal(false, test.isNull);
      equal(true, test.isNotNull);
      equal('Promise', test.instance);
      equal(true, test.is('Promise'));
    });

    it('custom objects', () => {
      class Custom { }
      const inst = new Custom();
      const test = type(inst);
      equal(true, test.isDefined);
      equal(true, test.isValid);
      equal(false, test.isNull);
      equal(true, test.isNotNull);
      equal('Custom', test.instance);
      equal(true, test.is('Custom'));
    });
  });

  describe('Should expose', () => {
    it('its value', () => {
      const test = type(1);
      equal(1, test.value);
      equal(1, test.valueOf());
    });

    it('toString method', () => {
      const test = type(1);
      equal('1', test.toString());
    });
  });
});
