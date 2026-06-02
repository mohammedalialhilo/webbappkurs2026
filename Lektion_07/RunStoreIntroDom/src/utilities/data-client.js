// import { products } from "../Data/products.js";
import { settings } from "../config/settings.js";



export default class DataClient {

    #data = undefined;
    #url = ' ';
    constructor() {
        // this.#fetchData(url);
        this.#url = settings.BASE_API_URL;

    }
    async listAll() {
        await this.#fetchData();
        return this.#data;
    }

    async findById(id) {
        await this.#fetchData();
        return this.#data.find((product) => product.id === id);
    }

    async #fetchData() {
        try {
            // const url = '../../Data/products.json';
            const response = await fetch(this.#url);
            if (response.ok) {
                const result = await response.json();
                this.#data = result.data;
                // console.log(result);
                return;
            }
        } catch (error) {
            console.log(error);
        }
    }
}