/**
 * Check if a value is not undefined
 *
 * @export {function}
 * @param {*} value
 * @returns {boolean}
 */
export function isDefined(value: any): boolean {
  return value !== undefined;
}

/**
 * Check if value is null
 *
 * @export {function}
 * @param {*} value
 * @returns {boolean}
 */
export function isNull(value: any): boolean {
  return value === null;
}

/**
 * Check if value is not null
 *
 * @export {function}
 * @param {*} value
 * @returns {boolean}
 */
export function isNotNull(value: any): boolean {
  return value !== null;
}

/**
 * Check if value is "valid" (is not null or undefined)
 *
 * @export {function}
 * @param {*} value
 * @returns {boolean}
 */
export function isValid(value: any): boolean {
  return isDefined(value) && isNotNull(value);
}

/**
 * Get the constructor name of the value
 *
 * @export {function}
 * @param {*} value
 * @returns {string}
 */
export function instance(value: any): string {
  return isValid(value) ? value.constructor.name : isNull(value) ? 'Null' : 'Undefined';
}

/**
 * Check if value is of type
 *
 * @export {function}
 * @param {*} value
 * @param {string} type
 * @returns {boolean}
 */
export function is(value: any, type: string): boolean {
  switch (type) {
    case 'Integer':
      return isNumber(value) && Number.isInteger(value);

    case 'Float':
      return isNumber(value) && !Number.isInteger(value);

    case 'Array':
      return Array.isArray(value);

    default:
      return instance(value) === type;
  }
}

/**
 * Check if value is a boolean
 *
 * @export {function}
 * @param {*} value
 * @returns {boolean}
 */
export function isBoolean(value: any): boolean {
  return is(value, 'Boolean');
}

/**
 * Check if value is a string
 *
 * @export {function}
 * @param {*} value
 * @returns {boolean}
 */
export function isString(value: any): boolean {
  return is(value, 'String');
}

/**
 * Check if value is a number
 *
 * @export {function}
 * @param {*} value
 * @returns {boolean}
 */
export function isNumber(value: any): boolean {
  return is(value, 'Number');
}

/**
 * Check if value is an integer number
 *
 * @export {function}
 * @param {*} value
 * @returns {boolean}
 */
export function isInteger(value: any): boolean {
  return is(value, 'Integer');
}

/**
 * Check if value is a float point number
 *
 * @export {function}
 * @param {*} value
 * @returns {boolean}
 */
export function isFloat(value: any): boolean {
  return is(value, 'Float');
}

/**
 * Check if value is an object
 *
 * @export {function}
 * @param {*} value
 * @returns {boolean}
 */
export function isObject(value: any): boolean {
  return is(value, 'Object');
}

/**
 * Check if value is an Array
 *
 * @export {function}
 * @param {*} value
 * @returns {boolean}
 */
export function isArray(value: any): boolean {
  return is(value, 'Array');
}

/**
 * Check if value is a Date object
 *
 * @export {function}
 * @param {*} value
 * @returns {boolean}
 */
export function isDate(value: any): boolean {
  return is(value, 'Date');
}

/**
 * Check if value is a Regular Expression
 *
 * @export {function}
 * @param {*} value
 * @returns {boolean}
 */
export function isRegExp(value: any): boolean {
  return is(value, 'RegExp');
}

/**
 * Check if value is a function
 *
 * @export {function}
 * @param {*} value
 * @returns {boolean}
 */
export function isFunction(value: any): boolean {
  return is(value, 'Function');
}

/**
 * Check if value is empty.
 * Only for string, array and objects. Any other type will return false.
 *
 * @export {function}
 * @param {(string | any[] | {[x: string]: any} | {[x: number]: any})} value
 * @returns {boolean}
 */
export function isEmpty(value: string | any[] | {[x: string]: any} | {[x: number]: any}): boolean {
  if (isString(value)) {
    return !(value as string).length;
  }

  if (isArray(value)) {
    return !(value as any[]).length;
  }

  if (isObject(value)) {
    return !Object.keys(value).length;
  }

  return false;
}
