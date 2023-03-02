export class OrderItem {

	constructor(
		private id: string,
		private name: string,
		private price: number,
		private quantity: number,
		private productId: string
	) {
		this.validate();
	}

	private validate(): void {
		if (this.quantity <= 0) {
			throw new Error('quantity invalid');
		}
	}

	public getTotalPrice(): number {
		return this.quantity * this.price;
	}
}
