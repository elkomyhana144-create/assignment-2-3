// 08-async — your work goes in this file.
//
// The lesson is in example.js:  node 08-async/example.js
// Check your work with:         npm test 08
//
// The first three are started for you. The LAST one has no code — you write it.
//
// Every function here is already marked `async`, because every one has to wait
// for the database. If a result comes out `undefined`, check for a missing
// `await` first.


import { findProduct, findAllProducts } from "./fake-db.js";

export async function productName(id) {
  const product = await findProduct(id);
  return product.name;
}

export async function priceLabel(id) {
  const product = await findProduct(id);
  return `${product.name} costs ${product.price} EGP`;
}

export async function safeProductName(id) {
  try {
    const product = await findProduct(id);
    return product.name;
  } catch (error) {
    return "Not found";
  }
}

export async function namesInStock() {
  const products = await findAllProducts();
  return products
    .filter((product) => product.inStock)
    .map((product) => product.name);
}
