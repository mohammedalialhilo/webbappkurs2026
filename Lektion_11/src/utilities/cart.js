export default class Cart {
  #itemsCount = 0;

  constructor(key) {
    this.key = key;
  }
  clearCart() {
    localStorage.removeItem(this.key);
  }
  //   get items
  getCartItems() {
    const items = JSON.parse(localStorage.getItem(this.key));
    if (!items) return [];
    return items;
  }

  //  set items
  setCartItems(data) {
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  //  count items
  get itemCount() {
    const items = JSON.parse(localStorage.getItem(this.key));

    if (!items) {
      this.#itemsCount = 0;
    } else {
      this.#itemsCount = items.length;
    }

    return this.#itemsCount;
  }
}
