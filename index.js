/**
 * @name @jsweb/truetype
 * @version 4.0.3
 * @desc Simple JS module to check types more consistently
 * @author Alex Bruno <git.alexbr@outlook.com>
 * @create date 2016-06-26 03:21:18
 * @modify date 2020-06-13 19:20:39
 */
/**
 * Check if a value is not undefined
 *
 * @param {*} value
 * @returns boolean
 */
function isDefined(value) {
  return value !== undefined
}

/**
 * Check if value is null
 *
 * @param {*} value
 * @returns boolean
 */
function isNull(value) {
  return value === null
}

/**
 * Check if value is not null
 *
 * @param {*} value
 * @returns boolean
 */
function isNotNull(value) {
  return value !== null
}

/**
 * Check if value is "valid" (not null or undefined)
 *
 * @param {*} value
 * @returns boolean
 */
function isValid(value) {
  return isDefined(value) && isNotNull(value)
}

/**
 * Get the constructor name of the value
 *
 * @param {*} value
 * @returns {string}
 */
function instance(value) {
  return isValid(value)
    ? value.constructor.name
    : isNull(value)
    ? 'Null'
    : 'Undefined'
}

/**
 * Check if value is an instance of type
 *
 * @param {*} value
 * @param {string} type
 * @returns boolean
 */
function is(value, type) {
  switch (type) {
    case 'Integer':
      return isNumber(value) && Number.isInteger(value)

    case 'Float':
      return isNumber(value) && !isInteger(value)

    default:
      return instance(value) === type
  }
}

/**
 * Check if value is a boolean
 *
 * @param {*} value
 * @returns boolean
 */
function isBoolean(value) {
  return is(value, 'Boolean')
}

/**
 * Check if value is a string
 *
 * @param {*} value
 * @returns boolean
 */
function isString(value) {
  return is(value, 'String')
}

/**
 * Check if value is a number
 *
 * @param {*} value
 * @returns boolean
 */
function isNumber(value) {
  return is(value, 'Number')
}

/**
 * Check if value is an integer number
 *
 * @param {*} value
 * @returns boolean
 */
function isInteger(value) {
  return is(value, 'Integer')
}

/**
 * Check if value is a float point number
 *
 * @param {*} value
 * @returns boolean
 */
function isFloat(value) {
  return is(value, 'Float')
}

/**
 * Check if value is an object
 *
 * @param {*} value
 * @returns boolean
 */
function isObject(value) {
  return is(value, 'Object')
}

/**
 * Check if value is an Array
 *
 * @param {*} value
 * @returns boolean
 */
function isArray(value) {
  return is(value, 'Array')
}

/**
 * Check if value is a Date object
 *
 * @param {*} value
 * @returns boolean
 */
function isDate(value) {
  return is(value, 'Date')
}

/**
 * Check if value is a Regular Expression
 *
 * @param {*} value
 * @returns boolean
 */
function isRegExp(value) {
  return is(value, 'RegExp')
}

/**
 * Check if value is a function
 *
 * @param {*} value
 * @returns boolean
 */
function isFunction(value) {
  return is(value, 'Function')
}

/**
 * Check if value is empty.
 * Only for string, array and objects. Any other type will return false.
 *
 * @param {*} value
 * @returns boolean
 */
function isEmpty(value) {
  if (isString(value) || isArray(value)) return !value.length

  if (isObject(value)) return !Object.keys(value).length

  return false
}

export { instance, is, isArray, isBoolean, isDate, isDefined, isEmpty, isFloat, isFunction, isInteger, isNotNull, isNull, isNumber, isObject, isRegExp, isString, isValid };
