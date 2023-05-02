import { IEvent } from "../../IEvent";

export class CustomerChangedAddressEvent implements IEvent {

	public dateOccurred: Date;

	constructor(
		public readonly data: any
	) {
		this.dateOccurred = new Date();
	}

}
