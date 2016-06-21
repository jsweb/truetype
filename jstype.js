class JSType {
	constructor(x) {
		this.item = x
	}

	toString() {
		return Object.prototype.toString.call(this.item).substr(8).replace(']', '')
	}

	is(type) {
		return this.toString() === type
	}

	isObject() {
		return this.is('Object')
	}

	isArray() {
		return this.is('Array')
	}

	isString() {
		return this.is('String')
	}

	isNumber() {
		return this.is('Number')
	}

	isBoolean() {
		return this.is('Boolean')
	}

	isNull() {
		return this.is('Null')
	}

	isDefined() {
		return !this.is('Undefined')
	}

	instance(obj) {
		return this.item instanceof obj
	}

	isInteger() {
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
}

export default x => new JSType(x)
