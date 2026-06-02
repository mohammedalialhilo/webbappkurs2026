
export default class Cart {
    #itemCount = 0;

    constructor(key) {
        this.key = key;
    }
    // get items
    getCartItems() {
        const items = JSON.parse(localStorage.getItem(this.key));
        if (!items) return [];
        return items;
    }

    // set items

    setCartItems(data) {
        localStorage.setItems(this.key).JSON.stringify(data);
    }
    // count items
    get ItemCount() {
        const items = JSON.parse(localStorage.getItem(this.key));
        if (!items) {
            this.#itemCount = 0;
        } else {
            this.#itemCount = items.length;
        }
        return this.#itemCount;
    }
}