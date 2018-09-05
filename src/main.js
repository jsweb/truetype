export default function (value) {
  return {
    get isDefined () {
      return value !== undefined
    },
    get isNull () {
      return value === null
    },
    get isNotNull () {
      return value !== null
    },
    get isValid () {
      return this.isDefined && this.isNotNull
    },
    get instance () {
      return this.isValid ? value.constructor.name :
        this.isNull ? 'Null' : 'Undefined'
    },
    get isBoolean () {
      return this.instance === 'Boolean'
    },
    get isString () {
      return this.instance === 'String'
    },
    get isNumber () {
      return this.instance === 'Number'
    },
    get isInteger () {
      return this.isNumber && value === parseInt(value)
    },
    get isFloat () {
      return this.isNumber && value !== parseInt(value)
    },
    get isObject () {
      return this.instance === 'Object'
    },
    get isArray () {
      return Array.isArray(value)
    },
    get isDate () {
      return this.instance === 'Date'
    },
    get isRegExp () {
      return this.instance === 'RegExp'
    },
    get isFunction () {
      return this.instance === 'Function'
    },
    get value () {
      return value
    },
    is (type) {
      switch (type) {
        case 'Integer':
          return this.isInteger
        case 'Float':
          return this.isFloat
        default:
          return this.instance === type
      }
    },
    valueOf () {
      return value
    },
    toString () {
      return value.toString()
    }
  }
}