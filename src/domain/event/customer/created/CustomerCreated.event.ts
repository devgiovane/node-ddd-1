import { IEvent } from "../../IEvent";

export class CustomerCreatedEvent implements IEvent {

	public dateOccurred: Date;

	constructor(
		public readonly data: any
	) {
		this.dateOccurred = new Date();
	}

}
