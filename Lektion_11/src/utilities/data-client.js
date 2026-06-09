import { settings } from '../config/settings.js';

export default class DataClient {
  #data = undefined;
  #url = '';

  constructor(resource) {
    this.#url = `${settings.BASE_API_URL}/${resource}`;
  }

  async add(data) {
    const success = await this.#addData(data);
  }

  async listAll() {
    await this.#fetchData();
    return this.#data;
  }

  async findById(id) {
    await this.#fetchData(id);
    return this.#data;
  }

  async #addData(data) {
    try {
      const response = await fetch(this.#url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.status === 201) return true;
      return false;
    } catch (error) {
      console.log(error);
    }
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

      if (response.ok) {
        const result = await response.json();
        this.#data = result;
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
