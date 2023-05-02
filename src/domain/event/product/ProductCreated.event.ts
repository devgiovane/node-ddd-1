import { IEvent } from "../IEvent";

export class ProductCreatedEvent implements IEvent {

	public dateOccurred: Date;

	constructor(
		public data: any
	) {
		this.dateOccurred = new Date();
	}

}
