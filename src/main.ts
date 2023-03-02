import { CustomerEntity } from "./domain/entity/Customer.entity";
import { AddressEntity } from "./domain/entity/Address.entity";
import { OrderItem } from "./domain/entity/OrderItem.entity";
import {Order} from "./domain/entity/Order.entity";

let customer = new CustomerEntity("1", "Giovane Santps");
const address = new AddressEntity("Rua Julio Bertolucci", 56, "17409-020", "Jafa");
customer.setAddress(address);
customer.activate();

const beer = new OrderItem("1", "Beer", 3.90);
const watter = new OrderItem("2", "Watter", 3.90);
const order = new Order("1", "1", [beer, watter]);
