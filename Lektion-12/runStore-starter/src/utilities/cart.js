export default class Cart {
  #itemsCount = 0;

  constructor(key) {
    this.key = key;
  }

  // PROPERTIES
  get itemCount() {
    const items = JSON.parse(localStorage.getItem(this.key));

    if (!items) {
      this.#itemsCount = 0;
    } else {
      this.#itemsCount = items.length;
    }

    return this.#itemsCount;
  }

  // METHODS
  clearCart() {
    localStorage.removeItem(this.key);
  }

  decrementItem(id) {
    const item = this.getCartItems().find((i) => i.id === id);
    if (!item) return;
    item.quantity--;
    if (item.quantity <= 0) {
      this.removeItem(id);
      return;
    }

    const items = this.#deleteItem(id);
    items.push(item);
    this.setCartItems(items);
  }

  incrementItem(id) {
    const item = this.getCartItems().find((i) => i.id === id);
    if (!item) return;

    item.quantity++;

    const items = this.#deleteItem(id);
    items.push(item);
    this.setCartItems(items);
  }

  getCartItems() {
    const items = JSON.parse(localStorage.getItem(this.key));
    if (!items) return [];
    return items;
  }

  removeItem(id) {
    const items = this.getCartItems().filter((i) => i.id !== id);
    this.setCartItems(items);
  }

  setCartItems(data) {
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  updateCart(item) {
    let items = this.getCartItems();
    let found = items.find((i) => i.id === item.id);

    if (found) {
      item.quantity = found.quantity + 1;
      items = items.filter((i) => i.id !== item.id);
    } else {
      item.quantity = 1;
    }

    items.push(item);

    this.setCartItems(items);
  }

  // PRIVATE METHODS
  #deleteItem(id) {
    return this.getCartItems().filter((i) => i.id !== id);
  }
}
