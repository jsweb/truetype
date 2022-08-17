/**
 * Check if a value is not undefined
 *
 * @param {*} value
 * @returns {boolean}
 */
export function isDefined(value: any): boolean {
  return value !== undefined
}

/**
 * Check if value is null
 *
 * @param {*} value
 * @returns {boolean}
 */
export function isNull(value: any): boolean {
  return value === null
}

/**
 * Check if value is not null
 *
 * @param {*} value
 * @returns {boolean}
 */
export function isNotNull(value: any): boolean {
  return value !== null
}

/**
 * Check if value is "valid" (not null or undefined)
 *
 * @param {*} value
 * @returns {boolean}
 */
export function isValid(value: any): boolean {
  return isDefined(value) && isNotNull(value)
}

/**
 * Check if value is a number
 *
 * @param {*} value
 * @returns {boolean}
 */
export function isNumber(value: any): boolean {
  return Number.isFinite(value)
}

/**
 * Check if value is an integer number
 *
 * @param {*} value
 * @returns {boolean}
 */
export function isInteger(value: any): boolean {
  return isNumber(value) && Number.isInteger(value)
}

/**
 * Check if value is a float point number
 *
 * @param {*} value
 * @returns {boolean}
 */
export function isFloat(value: any): boolean {
  return isNumber(value) && !isInteger(value)
}

/**
 * Check if value is a boolean
 *
 * @param {*} value
 * @returns {boolean}
 */
export function isBoolean(value: any): boolean {
  return is(value, 'Boolean')
}

/**
 * Check if value is a string
 *
 * @param {*} value
 * @returns {boolean}
 */
export function isString(value: any): boolean {
  return is(value, 'String')
}

/**
 * Check if value is an object
 *
 * @param {*} value
 * @returns {boolean}
 */
export function isObject(value: any): boolean {
  return is(value, 'Object')
}

/**
 * Check if value is an Array
 *
 * @param {*} value
 * @returns {boolean}
 */
export function isArray(value: any): boolean {
  return Array.isArray(value)
}

/**
 * Check if value is a Date object
 *
 * @param {*} value
 * @returns {boolean}
 */
export function isDate(value: any): boolean {
  return is(value, 'Date')
}

/**
 * Check if value is a Regular Expression
 *
 * @param {*} value
 * @returns {boolean}
 */
export function isRegExp(value: any): boolean {
  return is(value, 'RegExp')
}

/**
 * Check if value is a function
 *
 * @param {*} value
 * @returns {boolean}
 */
export function isFunction(value: any): boolean {
  return is(value, 'Function')
}

/**
 * Check if value is an instance of type
 *
 * @param {*} value
 * @param {string} type
 * @returns {boolean}
 */
export function is(value: any, type: string): boolean {
  switch (type) {
    case 'Integer':
      return isInteger(value)

    case 'Float':
      return isFloat(value)

    case 'Array':
      return isArray(value)

    default:
      return instance(value) === type
  }
}

/**
 * Get the constructor class name of the value
 *
 * @param {*} value
 * @returns {string}
 */
export function instance(value: any): string {
  return isValid(value)
    ? value.constructor.name
    : isNull(value)
    ? 'Null'
    : 'Undefined'
}

/**
 * Check if value is empty.
 * Only for string, array and objects. Any other type will return false.
 *
 * @param {*} value
 * @returns {boolean}
 */
export function isEmpty(value: any): boolean {
  if (isString(value) || isArray(value)) return !value.length

  if (isObject(value)) return !Object.keys(value).length

  return false
}
