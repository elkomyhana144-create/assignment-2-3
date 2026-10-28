
/**
 * Reads what is currently typed into the two boxes.
 *
 * @returns {{ name: string, price: number }}
 */
export function readForm() {
  const name = document.querySelector("#name").value.trim();
  const price = Number(document.querySelector("#price").value);

  return { name, price };
}

/**
 * Empties both boxes.
 *
 * @returns {void}
 */
export function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#price").value = "";
}

/**
 * Draws the list from an array of items, replacing whatever was there before.
 *
 * @param {Array<{name: string, price: number}>} items
 * @returns {void}
 */
export function renderList(items) {
  const list = document.querySelector("#list");

  list.innerHTML = "";

  for (const item of items) {
    const card = document.createElement("li");
    card.classList.add("card");

    const heading = document.createElement("h3");
    heading.textContent = item.name;

    const priceTag = document.createElement("p");
    priceTag.classList.add("price");
    priceTag.textContent = `${item.price} EGP`;

    card.append(heading, priceTag);
    list.append(card);
  }
}

/**
 * Handles form submission, validation, and rendering.
 *
 * @returns {void}
 */
export function wireForm() {
  const form = document.querySelector("#product-form");
  const nameInput = document.querySelector("#name");
  const priceInput = document.querySelector("#price");
  const error = document.querySelector("#error");

  const items = [];

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const item = readForm();

    if (item.name === "") {
      error.textContent = "Give the product a name.";
      return;
    }

    if (
      priceInput.value.trim() === "" ||
      !Number.isFinite(item.price) ||
      item.price <= 0
    ) {
      error.textContent = "Give the product a price.";
      return;
    }

    error.textContent = "";

    items.push(item);
    renderList(items);
    clearForm();
  });
}
