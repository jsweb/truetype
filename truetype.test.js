const type = require('./truetype')

it('import should return a Function', () => {
  const test = type(type)
  expect(test.isFunction()).toBe(true)
  expect(test.is('Function')).toBe(true)
})

it('instance should be of type object', () => {
  const test = type()
  expect(typeof test).toBe('object')
})

it('should validate Undefined', () => {
  const test = type()
  expect(test.isDefined()).toBe(false)
  expect(test.isValid()).toBe(false)
  expect(test.isNull()).toBe(false)
  expect(test.isNotNull()).toBe(true)
  expect(test.instance()).toBe('Undefined')
  expect(test.is('Undefined')).toBe(true)
})

it('should validate a Null', () => {
  const test = type(null)
  expect(test.isDefined()).toBe(true)
  expect(test.isValid()).toBe(false)
  expect(test.isNull()).toBe(true)
  expect(test.isNotNull()).toBe(false)
  expect(test.instance()).toBe('Null')
  expect(test.is('Null')).toBe(true)
})

it('should validate a Boolean', () => {
  const test = type(false)
  expect(test.isDefined()).toBe(true)
  expect(test.isValid()).toBe(true)
  expect(test.isNull()).toBe(false)
  expect(test.isNotNull()).toBe(true)
  expect(test.isBoolean()).toBe(true)
  expect(test.instance()).toBe('Boolean')
  expect(test.is('Boolean')).toBe(true)
})

it('should validate a String', () => {
  const test = type('string')
  expect(test.isDefined()).toBe(true)
  expect(test.isValid()).toBe(true)
  expect(test.isNull()).toBe(false)
  expect(test.isNotNull()).toBe(true)
  expect(test.isString()).toBe(true)
  expect(test.instance()).toBe('String')
  expect(test.is('String')).toBe(true)
})

it('should validate a Number', () => {
  const test = type(1)
  expect(test.isDefined()).toBe(true)
  expect(test.isValid()).toBe(true)
  expect(test.isNull()).toBe(false)
  expect(test.isNotNull()).toBe(true)
  expect(test.isNumber()).toBe(true)
  expect(test.instance()).toBe('Number')
  expect(test.is('Number')).toBe(true)
})

it('should validate a Integer', () => {
  const test = type(1)
  expect(test.isDefined()).toBe(true)
  expect(test.isValid()).toBe(true)
  expect(test.isNull()).toBe(false)
  expect(test.isNotNull()).toBe(true)
  expect(test.isInteger()).toBe(true)
  expect(test.instance()).toBe('Number')
  expect(test.is('Integer')).toBe(true)
})

it('should validate a Float', () => {
  const test = type(1.1)
  expect(test.isDefined()).toBe(true)
  expect(test.isValid()).toBe(true)
  expect(test.isNull()).toBe(false)
  expect(test.isNotNull()).toBe(true)
  expect(test.isFloat()).toBe(true)
  expect(test.instance()).toBe('Number')
  expect(test.is('Float')).toBe(true)
})

it('should validate an Object', () => {
  const test = type({})
  expect(test.isDefined()).toBe(true)
  expect(test.isValid()).toBe(true)
  expect(test.isNull()).toBe(false)
  expect(test.isNotNull()).toBe(true)
  expect(test.isObject()).toBe(true)
  expect(test.instance()).toBe('Object')
  expect(test.is('Object')).toBe(true)
})

it('should validate an Array', () => {
  const test = type([])
  expect(test.isDefined()).toBe(true)
  expect(test.isValid()).toBe(true)
  expect(test.isNull()).toBe(false)
  expect(test.isNotNull()).toBe(true)
  expect(test.isArray()).toBe(true)
  expect(test.instance()).toBe('Array')
  expect(test.is('Array')).toBe(true)
})

it('should validate a Date', () => {
  const test = type(new Date)
  expect(test.isDefined()).toBe(true)
  expect(test.isValid()).toBe(true)
  expect(test.isNull()).toBe(false)
  expect(test.isNotNull()).toBe(true)
  expect(test.isDate()).toBe(true)
  expect(test.instance()).toBe('Date')
  expect(test.is('Date')).toBe(true)
})

it('should validate a RegExp', () => {
  const test = type(/a/)
  expect(test.isDefined()).toBe(true)
  expect(test.isValid()).toBe(true)
  expect(test.isNull()).toBe(false)
  expect(test.isNotNull()).toBe(true)
  expect(test.isRegExp()).toBe(true)
  expect(test.instance()).toBe('RegExp')
  expect(test.is('RegExp')).toBe(true)
})

it('should validate a Function', () => {
  const test = type(function(){})
  expect(test.isDefined()).toBe(true)
  expect(test.isValid()).toBe(true)
  expect(test.isNull()).toBe(false)
  expect(test.isNotNull()).toBe(true)
  expect(test.isFunction()).toBe(true)
  expect(test.instance()).toBe('Function')
  expect(test.is('Function')).toBe(true)
})

it('should validate any type', () => {
  const test = type(Promise.resolve())
  expect(test.isDefined()).toBe(true)
  expect(test.isValid()).toBe(true)
  expect(test.isNull()).toBe(false)
  expect(test.isNotNull()).toBe(true)
  expect(test.instance()).toBe('Promise')
  expect(test.is('Promise')).toBe(true)
})

it('should validate custom objects', () => {
  class Custom {}
  const test = type(new Custom)
  expect(test.isDefined()).toBe(true)
  expect(test.isValid()).toBe(true)
  expect(test.isNull()).toBe(false)
  expect(test.isNotNull()).toBe(true)
  expect(test.instance()).toBe('Custom')
  expect(test.is('Custom')).toBe(true)
})

it('should expose its value', () => {
  const test = type(1)
  expect(test.value).toBe(1)
  expect(test.valueOf()).toBe(1)
})

it('should expose toString method', () => {
  const test = type(1)
  expect(test.toString()).toBe('1')
})
