class JSType {
	constructor(x) {
		try {
			this.item = x
		} catch(e) {
			this.item = undefined
		}
	}

	toString() {
		return Object.prototype.toString.call(this.item).substr(8).replace(']', '')
	}

	isObject() {
		return this.toString() === 'Object'
	}

	isArray() {
		return this.toString() === 'Array'
	}

	isString() {
		return this.toString() === 'String'
	}

	isBoolean() {
		return this.toString() === 'Boolean'
	}

	isDate() {
		return this.toString() === 'Date'
	}

	isRegExp() {
		return this.toString() === 'RegExp'
	}

	isNull() {
		return this.toString() === 'Null'
	}

	isDefined() {
		return !this.toString() === 'Undefined'
	}

	isNumber() {
		return this.toString() === 'Number'
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
				return this.toString() === type
		}
	}
}

export default x => new JSType(x)
