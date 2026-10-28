
import { items } from "./items.js";

export function renderItems(list) {
  const element = document.querySelector("#list");
  element.innerHTML = "";

  for (const item of list) {
    const row = document.createElement("li");
    row.classList.add("row");
    row.textContent = `${item.name} - ${item.price} EGP`;
    element.append(row);
  }
}

export function matching() {
  return items.filter((item) => item.inStock === true);
}

export function start() {
  renderItems(items);

  document.querySelector("#narrow").addEventListener("click", () => {
    renderItems(matching());
  });
}

start();
