
import { findAllOrders, findOrderById } from "./orders-db.js";

/**
 * Returns every order from the database.
 * @returns {Promise<Array>}
 */
export async function loadOrders() {
  const orders = await findAllOrders();
  return orders;
}

/**
 * Returns orders from Cairo that are cancelled.
 * @param {Array} orders
 * @returns {Array}
 */
export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Cairo" && order.status === "cancelled"
  );
}

/**
 * Calculates total revenue across the given orders.
 * @param {Array} orders
 * @returns {number}
 */
export function summarize(orders) {
  return orders.reduce(
    (total, order) => total + order.price * order.quantity,
    0
  );
}

/**
 * Returns a label for an order, or a message if it doesn't exist.
 * @param {number} id
 * @returns {Promise<string>}
 */
export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.student}: ${order.item} x${order.quantity}`;
  } catch (error) {
    return `No order with id ${id}`;
  }
}

/**
 * Returns JSON text containing only item and quantity for each order.
 * @param {Array} orders
 * @returns {string}
 */
export function toJsonLines(orders) {
  const simplifiedOrders = orders.map(({ item, quantity }) => ({
    item,
    quantity,
  }));

  return JSON.stringify(simplifiedOrders);
}
