import { Sequelize } from "sequelize-typescript";
import { CustomerMapper } from "../../mapper/sequelize/Customer.mapper";
import { OrderMapper } from "../../mapper/sequelize/Order.mapper";
import { OrderItemMapper } from "../../mapper/sequelize/OrderItem.mapper";
import { ProductMapper } from "../../mapper/sequelize/Product.mapper";
import { CustomerRepository } from "./Customer.repository";
import { Customer } from "../../../domain/entity/Customer.entity";
import { Address } from "../../../domain/entity/Address.entity";
import { ProductRepository } from "./Product.repository";
import { Product } from "../../../domain/entity/Product.entity";
import { OrderItem } from "../../../domain/entity/OrderItem.entity";
import { Order } from "../../../domain/entity/Order.entity";
import { OrderRepository } from "./Order.repository";

describe('Order repository', function () {

	let sequelize: Sequelize;

	beforeEach(async () => {
		sequelize = new Sequelize({
			dialect: "sqlite",
			storage: ":memory:",
			logging: false,
			sync: {force: true},
		});
		sequelize.addModels([CustomerMapper, OrderMapper, OrderItemMapper, ProductMapper]);
		await sequelize.sync();
	});

	afterEach(async () => {
		await sequelize.close();
	});

	it('should be able save order', async function () {
		const customerRepository = new CustomerRepository();
		const newCustomer = new Customer("1", "Customer 1");
		newCustomer.setAddress(new Address("Street", 1, "00000-000", "City"));
		await customerRepository.save(newCustomer);

		const productRepository = new ProductRepository();
		const newProduct = new Product("1", "Product 1", 20);
		await productRepository.save(newProduct);

		const orderItem = new OrderItem("1", newProduct.getName(), newProduct.getPrice(), 2, newProduct.getId());
		const newOrder = new Order("1", "1", [orderItem]);
		const orderRepository = new OrderRepository();
		await orderRepository.save(newOrder);

		const order = await orderRepository.find("1");
		expect(order.toJSON()).toStrictEqual(newOrder.toJSON());
	});

	it('should be able a find order', async function () {
		const customerRepository = new CustomerRepository();
		const newCustomer = new Customer("1", "Customer 1");
		newCustomer.setAddress(new Address("Street", 1, "00000-000", "City"));
		await customerRepository.save(newCustomer);

		const productRepository = new ProductRepository();
		const newProduct = new Product("1", "Product 1", 20);
		await productRepository.save(newProduct);

		const orderItem = new OrderItem("1", newProduct.getName(), newProduct.getPrice(), 2, newProduct.getId());
		const newOrder = new Order("1", "1", [orderItem]);
		const orderRepository = new OrderRepository();
		await orderRepository.save(newOrder);

		const order = await orderRepository.find("1");
		expect(order.toJSON()).toStrictEqual(newOrder.toJSON());
	});

	it('should be able a find all orders', async function () {
		const customerRepository = new CustomerRepository();
		const newCustomer = new Customer("1", "Customer 1");
		newCustomer.setAddress(new Address("Street", 1, "00000-000", "City"));
		await customerRepository.save(newCustomer);

		const productRepository = new ProductRepository();
		const newProduct = new Product("1", "Product 1", 10);
		await productRepository.save(newProduct);

		const orderItem = new OrderItem("1", newProduct.getName(), newProduct.getPrice(), 2, newProduct.getId());
		const newOrder = new Order("1", "1", [orderItem]);
		const orderRepository = new OrderRepository();
		await orderRepository.save(newOrder);

		const orders = await orderRepository.findAll();
		expect(orders).toHaveLength(1);
		expect(orders).toContainEqual(newOrder);
	});

});
