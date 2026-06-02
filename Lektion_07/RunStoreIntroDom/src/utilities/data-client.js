// import { products } from "../Data/products.js";




export default class DataClient {

    #data = undefined;
    #url = ' ';
    constructor(url) {
        // this.#fetchData(url);
        this.#url = url;

    }
    async listAll() {
        await this.#fetchData();
        return this.#data;
    }

    async find(id) {
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
                console.log(result);
                return;
            }




        } catch (error) {
            console.log(error);
        }
    }
}