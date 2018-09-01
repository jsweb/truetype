import { equal } from 'assert'
import type from './truetype'

describe('@jsweb/truetype', () => {
  it('import should return a Function', () => {
    const test = type(type)
    equal(test.isFunction, true)
    equal(test.is('Function'), true)
  })

  it('instance should return an Object', () => {
    const test = type()
    equal(type(test).instance, 'Object')
  })

  describe('Should validate', () => {
    it('Undefined', () => {
      const test = type()
      equal(test.isDefined, false)
      equal(test.isValid, false)
      equal(test.isNull, false)
      equal(test.isNotNull, true)
      equal(test.instance, 'Undefined')
      equal(test.is('Undefined'), true)
    })

    it('Null', () => {
      const test = type(null)
      equal(test.isDefined, true)
      equal(test.isValid, false)
      equal(test.isNull, true)
      equal(test.isNotNull, false)
      equal(test.instance, 'Null')
      equal(test.is('Null'), true)
    })

    it('a Boolean', () => {
      const test = type(false)
      equal(test.isDefined, true)
      equal(test.isValid, true)
      equal(test.isNull, false)
      equal(test.isNotNull, true)
      equal(test.isBoolean, true)
      equal(test.instance, 'Boolean')
      equal(test.is('Boolean'), true)
    })

    it('a String', () => {
      const test = type('string')
      equal(test.isDefined, true)
      equal(test.isValid, true)
      equal(test.isNull, false)
      equal(test.isNotNull, true)
      equal(test.isString, true)
      equal(test.instance, 'String')
      equal(test.is('String'), true)
    })

    it('a Number', () => {
      const test = type(1)
      equal(test.isDefined, true)
      equal(test.isValid, true)
      equal(test.isNull, false)
      equal(test.isNotNull, true)
      equal(test.isNumber, true)
      equal(test.instance, 'Number')
      equal(test.is('Number'), true)
    })

    it('a Integer', () => {
      const test = type(1)
      equal(test.isDefined, true)
      equal(test.isValid, true)
      equal(test.isNull, false)
      equal(test.isNotNull, true)
      equal(test.isInteger, true)
      equal(test.instance, 'Number')
      equal(test.is('Integer'), true)
    })

    it('a Float', () => {
      const test = type(1.1)
      equal(test.isDefined, true)
      equal(test.isValid, true)
      equal(test.isNull, false)
      equal(test.isNotNull, true)
      equal(test.isFloat, true)
      equal(test.instance, 'Number')
      equal(test.is('Float'), true)
    })

    it('an Object', () => {
      const test = type({})
      equal(test.isDefined, true)
      equal(test.isValid, true)
      equal(test.isNull, false)
      equal(test.isNotNull, true)
      equal(test.isObject, true)
      equal(test.instance, 'Object')
      equal(test.is('Object'), true)
    })

    it('an Array', () => {
      const test = type([])
      equal(test.isDefined, true)
      equal(test.isValid, true)
      equal(test.isNull, false)
      equal(test.isNotNull, true)
      equal(test.isArray, true)
      equal(test.instance, 'Array')
      equal(test.is('Array'), true)
    })

    it('a Date', () => {
      const test = type(new Date)
      equal(test.isDefined, true)
      equal(test.isValid, true)
      equal(test.isNull, false)
      equal(test.isNotNull, true)
      equal(test.isDate, true)
      equal(test.instance, 'Date')
      equal(test.is('Date'), true)
    })

    it('a RegExp', () => {
      const test = type(/a/)
      equal(test.isDefined, true)
      equal(test.isValid, true)
      equal(test.isNull, false)
      equal(test.isNotNull, true)
      equal(test.isRegExp, true)
      equal(test.instance, 'RegExp')
      equal(test.is('RegExp'), true)
    })

    it('a Function', () => {
      const test = type(() => {})
      equal(test.isDefined, true)
      equal(test.isValid, true)
      equal(test.isNull, false)
      equal(test.isNotNull, true)
      equal(test.isFunction, true)
      equal(test.instance, 'Function')
      equal(test.is('Function'), true)
    })

    it('any type', () => {
      const inst = new Promise(() => {}, () => {})
      const test = type(inst)
      equal(test.isDefined, true)
      equal(test.isValid, true)
      equal(test.isNull, false)
      equal(test.isNotNull, true)
      equal(test.instance, 'Promise')
      equal(test.is('Promise'), true)
    })

    it('custom objects', () => {
      class Custom {}
      const inst = new Custom()
      const test = type(inst)
      equal(test.isDefined, true)
      equal(test.isValid, true)
      equal(test.isNull, false)
      equal(test.isNotNull, true)
      equal(test.instance, 'Custom')
      equal(test.is('Custom'), true)
    })
  });

  describe('Should expose', () => {
    it('its value', () => {
      const test = type(1)
      equal(test.value, 1)
      equal(test.valueOf(), 1)
    })

    it('toString method', () => {
      const test = type(1)
      equal(test.toString(), '1')
    })
  });
});

