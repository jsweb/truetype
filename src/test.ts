import test from 'ava'
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
} from './truetype'

class Custom {}
const custom = new Custom()
const date = new Date()
const regex = new RegExp('')
const promise = Promise.resolve()

test('isDefined', (t) => {
  t.true(isDefined(0))
  t.true(isDefined(1))
  t.true(isDefined(null))
  t.false(isDefined(undefined))
})

test('isNull', (t) => {
  t.true(isNull(null))
  t.false(isNull(0))
  t.false(isNull(1))
  t.false(isNull(undefined))
})

test('isNotNull', (t) => {
  t.false(isNotNull(null))
  t.true(isNotNull(0))
  t.true(isNotNull(1))
  t.true(isNotNull(undefined))
})

test('isValid', (t) => {
  t.true(isValid(0))
  t.true(isValid(1))
  t.false(isValid(null))
  t.false(isValid(undefined))
})

test('isNumber', (t) => {
  t.true(isNumber(0))
  t.true(isNumber(1))
  t.true(isNumber(1.1))
  t.false(isNumber('1.1'))
  t.false(isNumber(null))
  t.false(isNumber(undefined))
})

test('isInteger', (t) => {
  t.true(isInteger(0))
  t.true(isInteger(1))
  t.false(isInteger(1.1))
  t.false(isInteger('1.1'))
  t.false(isInteger(null))
  t.false(isInteger(undefined))
})

test('isFloat', (t) => {
  t.false(isFloat(0))
  t.false(isFloat(1))
  t.true(isFloat(1.1))
  t.false(isFloat('1.1'))
  t.false(isFloat(null))
  t.false(isFloat(undefined))
})

test('isBoolean', (t) => {
  t.true(isBoolean(true))
  t.true(isBoolean(false))
  t.false(isBoolean(0))
  t.false(isBoolean(1))
  t.false(isBoolean(1.1))
  t.false(isBoolean('1.1'))
  t.false(isBoolean(null))
  t.false(isBoolean(undefined))
})

test('isString', (t) => {
  t.true(isString(''))
  t.true(isString('1'))
  t.true(isString('1.1'))
  t.false(isString(0))
  t.false(isString(1))
  t.false(isString(1.1))
  t.false(isString(null))
  t.false(isString(undefined))
})

test('isObject', (t) => {
  t.true(isObject({}))
  t.true(isObject({ a: 1 }))
  t.false(isObject(0))
  t.false(isObject(1))
  t.false(isObject('1'))
  t.false(isObject([]))
  t.false(isObject(null))
  t.false(isObject(undefined))
})

test('isArray', (t) => {
  t.true(isArray([]))
  t.true(isArray([1]))
  t.false(isArray(0))
  t.false(isArray(1))
  t.false(isArray('1'))
  t.false(isArray({}))
  t.false(isArray(null))
  t.false(isArray(undefined))
})

test('isDate', (t) => {
  t.true(isDate(new Date()))
  t.false(isDate(0))
  t.false(isDate(1))
  t.false(isDate('1'))
  t.false(isDate([]))
  t.false(isDate(null))
  t.false(isDate(undefined))
})

test('isRegExp', (t) => {
  t.true(isRegExp(/a/))
  t.true(isRegExp(regex))
  t.false(isRegExp(0))
  t.false(isRegExp(1))
  t.false(isRegExp('1'))
  t.false(isRegExp([]))
  t.false(isRegExp(null))
  t.false(isRegExp(undefined))
})

test('isFunction', (t) => {
  t.true(isFunction(() => {}))
  t.true(isFunction(function () {}))
  t.false(isFunction(date))
  t.false(isFunction(0))
  t.false(isFunction(1))
  t.false(isFunction('1'))
  t.false(isFunction([]))
  t.false(isFunction(null))
  t.false(isFunction(undefined))
})

test('is', (t) => {
  t.true(is(0, 'Number'))
  t.true(is(1, 'Integer'))
  t.true(is(1.1, 'Float'))
  t.true(is('1.1', 'String'))
  t.true(is(true, 'Boolean'))
  t.true(is(false, 'Boolean'))
  t.true(is({}, 'Object'))
  t.true(is([], 'Array'))
  t.true(is(date, 'Date'))
  t.true(is(regex, 'RegExp'))
  t.true(is(function () {}, 'Function'))
  t.true(is(promise, 'Promise'))
  t.true(is(Promise.resolve, 'Function'))
  t.true(is(custom, 'Custom'))
})

test('instance', (t) => {
  t.is(instance(date), 'Date')
  t.is(instance(promise), 'Promise')
  t.is(instance(Promise.resolve), 'Function')
})

test('isEmpty', (t) => {
  t.true(isEmpty([]))
  t.true(isEmpty({}))
  t.true(isEmpty(''))
  t.false(isEmpty(null))
  t.false(isEmpty(undefined))
  t.false(isEmpty(0))
  t.false(isEmpty(1))
  t.false(isEmpty('1'))
  t.false(isEmpty({ a: 1 }))
  t.false(isEmpty([1]))
})
