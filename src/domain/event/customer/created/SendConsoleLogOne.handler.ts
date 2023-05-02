import { IEventHandler } from "../../IEvent.handler";
import { CustomerCreatedEvent } from "./CustomerCreated.event";

export class SendConsoleLogOneHandler implements IEventHandler {

	public handle(event: CustomerCreatedEvent): void {
		console.log(`This is a first console.log of event: CustomerCreatedEvent`);
	}

}
