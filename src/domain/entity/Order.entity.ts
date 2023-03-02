import { OrderItem } from "./OrderItem.entity";

export class Order {

	private readonly total: number = 0;

	constructor(
		private id: string,
		private customerId: string,
		private items: Array<OrderItem>
	) {
		this.total = this.sumTotal();
		this.validate();
	}

	private validate(): void {
		if (this.id.length === 0) {
			throw new Error('id is required');
		}
		if (this.items.length === 0) {
			throw new Error('items is required');
		}
	}

	public getTotal(): number {
		return this.total;
	}

	public sumTotal(): number {
		return this.items.reduce((total: number, item: OrderItem) => total + item.getTotalPrice(), 0);
	}
}

