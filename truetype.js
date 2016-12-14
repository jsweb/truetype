class TrueType {
	constructor(x) {
		try {
			this.item = x
		} catch (e) {
			this.item = undefined
		}
	}

	instance() {
		return this.isValid() ? this.item.constructor.name : this.isNull() ? 'Null' : 'Undefined'
	}

	isValid() {
		return this.isDefined() && this.isNotNull()
	}

	isDefined() {
		return this.item !== undefined
	}

	isNotNull() {
		return this.item !== null
	}

	isNull() {
		return this.item === null
	}

	isObject() {
		return this.instance() === 'Object'
	}

	isArray() {
		return this.instance() === 'Array'
	}

	isString() {
		return this.instance() === 'String'
	}

	isBoolean() {
		return this.instance() === 'Boolean'
	}

	isDate() {
		return this.instance() === 'Date'
	}

	isRegExp() {
		return this.instance() === 'RegExp'
	}

	isNumber() {
		return this.instance() === 'Number'
	}

	isInt() {
		if (this.isNumber())
			return this.item === parseInt(this.item)
		else
			return false
	}

	isFloat() {
		if (this.isNumber())
			return this.item !== parseInt(this.item)
		else
			return false
	}

	is(type) {
		switch (type) {
			case 'Int':
				return this.isInt()
			case 'Float':
				return this.isFloat()
			default:
				return this.instance() === type
		}
	}
}

export default x => new TrueType(x)
