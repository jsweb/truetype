import { strictEqual as equal } from 'assert'
import {
  instance,
  is,
  isArray,
  isBoolean,
  isDate,
  isDefined,
  isEmpty,
  isFloat,
  isFunction,
  isInteger,
  isNotNull,
  isNull,
  isNumber,
  isObject,
  isRegExp,
  isString,
  isValid,
} from './index.js'

class Custom {}
const custom = new Custom()
const async = Promise.resolve(true)

describe('@jsweb/truetype', () => {
  it('isDefined', () => {
    equal(isDefined(0), true)
    equal(isDefined('str'), true)
    equal(isDefined(true), true)
    equal(isDefined(null), true)
    equal(isDefined(undefined), false)
  })

  it('isNull', () => {
    equal(isNull(0), false)
    equal(isNull('str'), false)
    equal(isNull(true), false)
    equal(isNull(null), true)
    equal(isNull(undefined), false)
  })

  it('isNotNull', () => {
    equal(isNotNull(0), true)
    equal(isNotNull('str'), true)
    equal(isNotNull(true), true)
    equal(isNotNull(null), false)
    equal(isNotNull(undefined), true)
  })

  it('isValid', () => {
    equal(isValid(0), true)
    equal(isValid('str'), true)
    equal(isValid(true), true)
    equal(isValid(null), false)
    equal(isValid(undefined), false)
  })

  it('instance', () => {
    equal(instance(0), 'Number')
    equal(instance('str'), 'String')
    equal(instance(true), 'Boolean')
    equal(instance(null), 'Null')
    equal(instance(undefined), 'Undefined')
    equal(instance(async), 'Promise')
    equal(instance(custom), 'Custom')
  })

  it('is', () => {
    equal(is(0, 'Number'), true)
    equal(is('str', 'String'), true)
    equal(is(true, 'Boolean'), true)
    equal(is(null, 'Null'), true)
    equal(is(undefined, 'Undefined'), true)
    equal(is(async, 'Promise'), true)
    equal(is(custom, 'Custom'), true)
  })

  it('isBoolean', () => {
    equal(isBoolean(true), true)
    equal(isBoolean(false), true)
    equal(isBoolean('true'), false)
    equal(isBoolean('false'), false)
    equal(isBoolean(0), false)
  })

  it('isString', () => {
    equal(isString(''), true)
    equal(isString('str'), true)
    equal(isString(String), false)
    equal(isString(true), false)
    equal(isString(0), false)
  })

  it('isNumber', () => {
    equal(isNumber(0), true)
    equal(isNumber(0.1), true)
    equal(isNumber(Number), false)
    equal(isNumber('0'), false)
    equal(isNumber(true), false)
  })

  it('isInteger', () => {
    equal(isInteger(0), true)
    equal(isInteger(0.1), false)
    equal(isInteger('0'), false)
  })

  it('isFloat', () => {
    equal(isFloat(0), false)
    equal(isFloat(0.1), true)
    equal(isFloat('0.1'), false)
  })

  it('isObject', () => {
    equal(isObject(0), false)
    equal(isObject('str'), false)
    equal(isObject(true), false)
    equal(isObject([]), false)
    equal(isObject({}), true)
  })

  it('isArray', () => {
    equal(isArray(0), false)
    equal(isArray('str'), false)
    equal(isArray(true), false)
    equal(isArray({}), false)
    equal(isArray([]), true)
  })

  it('isDate', () => {
    equal(isDate(0), false)
    equal(isDate('str'), false)
    equal(isDate(true), false)
    equal(isDate('2018-10-05T22:48:00'), false)
    equal(isDate(new Date()), true)
  })

  it('isRegExp', () => {
    equal(isRegExp(0), false)
    equal(isRegExp('str'), false)
    equal(isRegExp(true), false)
    equal(isRegExp(new RegExp('str')), true)
    equal(isRegExp(/str/), true)
  })

  it('isFunction', () => {
    equal(isFunction(0), false)
    equal(isFunction('str'), false)
    equal(isFunction(true), false)
    equal(isFunction(isFunction), true)
    equal(
      isFunction(() => {
        alert(1)
      }),
      true,
    )
  })

  it('isEmpty', () => {
    equal(isEmpty(''), true)
    equal(isEmpty('str'), false)
    equal(isEmpty([]), true)
    equal(isEmpty([1, 2, 3]), false)
    equal(isEmpty({}), true)
    equal(isEmpty({ a: 1 }), false)
  })
})
