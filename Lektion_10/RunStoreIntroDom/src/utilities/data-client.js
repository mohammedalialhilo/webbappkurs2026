// import { products } from "../Data/products.js";
import { settings } from "../config/settings.js";



export default class DataClient {

    #data = undefined;
    #url = ' ';
    constructor(resource) {
        // this.#fetchData(url);
        this.#url = `${settings.BASE_API_URL}/${resource}`;

    }
    async listAll() {
        await this.#fetchData();
        return this.#data;
    }

    async findById(id) {
        await this.#fetchData(id);
        return this.#data;
    }

    async #fetchData(id = undefined) {
        try {
            let response;

            if (!id) {

                response = await fetch(this.#url);

            } else {
                const url = this.#url + '/' + id;
                response = await fetch(url);

            }
            // const url = '../../Data/products.json';
            if (response.ok) {
                const result = await response.json();
                this.#data = result;
                // console.log(result);
                return;
            }
        } catch (error) {
            console.log(error);
        }
    }
}