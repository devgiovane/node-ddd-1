import { EventDispatcher } from "./Event.dispatcher";
import { SendEmailWhenProductCreatedHandler } from "./product/SendEmailWhenProductCreated.handler";
import {ProductCreatedEvent} from "./product/ProductCreated.event";

describe('Domain Event Dispatcher', function () {

	it('should be able a register event', function () {
		const eventDispatcher = new EventDispatcher();
		const eventHandler = new SendEmailWhenProductCreatedHandler();
		eventDispatcher.register("ProductCreatedEvent", eventHandler);
		const handlers = eventDispatcher.getEventHandler("ProductCreatedEvent");
		expect(handlers).toBeDefined();
		expect(handlers.length).toEqual(1);
	});

	it('should be able unregister event', function () {
		const eventDispatcher = new EventDispatcher();
		const eventHandler = new SendEmailWhenProductCreatedHandler();
		eventDispatcher.register("ProductCreatedEvent", eventHandler);
		expect(eventDispatcher.getEventHandler("ProductCreatedEvent")).toBeDefined();
		eventDispatcher.unregister("ProductCreatedEvent", eventHandler);
		const handlers = eventDispatcher.getEventHandler("ProductCreatedEvent");
		expect(handlers.length).toEqual(0);
	});

	it('should be able notify handler', function () {
		const eventDispatcher = new EventDispatcher();
		const eventHandler = new SendEmailWhenProductCreatedHandler();
		const spyEventHandler = jest.spyOn(eventHandler, "handle");
		eventDispatcher.register("ProductCreatedEvent", eventHandler);
		expect(eventDispatcher.getEventHandler("ProductCreatedEvent")).toBeDefined();
		const productCreatedEvent = new ProductCreatedEvent({
			name: "Product 1",
			description: "Product description",
			price: 10.0
		});
		eventDispatcher.notify(productCreatedEvent);
		expect(spyEventHandler).toHaveBeenCalled()
	});

});
