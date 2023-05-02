import { IEventHandler } from "../../IEvent.handler";
import { ProductCreatedEvent } from "./ProductCreated.event";

export class SendEmailWhenProductCreatedHandler implements IEventHandler {

	public handle(event: ProductCreatedEvent): void {
		console.log(`Sending email to ...`);
	}

}
