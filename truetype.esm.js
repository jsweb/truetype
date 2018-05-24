class TrueType {
	constructor(value) {
		this.value = value
	}

	isDefined() {
		return this.value !== undefined
	}

	isNull() {
		return this.value === null
	}

	isNotNull() {
		return this.value !== null
	}

	isValid() {
		return this.isDefined() && this.isNotNull()
	}

	instance() {
		return this.isValid() ? this.value.constructor.name : this.isNull() ? 'Null' : 'Undefined'
	}

	isBoolean() {
		return this.instance() === 'Boolean'
	}

	isString() {
		return this.instance() === 'String'
	}

	isNumber() {
		return this.instance() === 'Number'
  }

  isInt() {
    return this.isInteger()
  }

	isInteger() {
    return this.isNumber() && this.value === parseInt(this.value)
	}

	isFloat() {
    return this.isNumber() && this.value !== parseInt(this.value)
	}

	isObject() {
		return this.instance() === 'Object'
	}

	isArray() {
		return Array.isArray(this.value)
	}

	isDate() {
		return this.instance() === 'Date'
	}

	isRegExp() {
		return this.instance() === 'RegExp'
  }

  isFunction() {
    return this.instance() === 'Function'
  }

	is(type) {
		switch (type) {
			case 'Int':
				return this.isInt()
      case 'Integer':
        return this.isInteger()
			case 'Float':
				return this.isFloat()
			default:
				return this.instance() === type
		}
  }

  valueOf() {
    return this.value
  }

  toString() {
    return this.value.toString()
  }
}

export default x => new TrueType(x)
