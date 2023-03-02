export class Address {

	constructor(
		private street: string,
		private number: number,
		private zip: string,
		private city: string,
	) {
		this.validate();
	}

	private validate() {
		if (this.street.length === 0) {
			throw new Error("street is required");
		}
		if (this.number === 0) {
			throw new Error("number is required");
		}
		if  (this.zip.length === 0) {
			throw new Error("zip is required");
		}
		if (this.city.length === 0) {
			throw new Error("city is required");
		}
	}

	toString(): string {
		return `${this.street}, ${this.number} - ${this.city}`;
	}

}
