import { settings } from "../config/settings.js";

export default class DataClient {
  #data = undefined;
  #url = "";

  constructor(resource) {
    this.#url = `${settings.BASE_API_URL}/${resource}`;
  }

  async add(data) {
    const success = await this.#addData(data);
    return success;
  }

  async listAll() {
    await this.#fetchData();
    return this.#data;
  }
  async login(data) {
    try {
      const response = await fetch(this.#url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        return await response.json();
      }
      throw new Error(`${response.status} - ${response.statusText}`);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  async findById(id) {
    await this.#fetchData(id);
    return this.#data;
  }

  async #addData(data) {
    try {
      const response = await fetch(this.#url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // if (response.status === 201) return true;
      // return false;
      if (response.status === 201) {
        return true;
      } else {
        throw new Error(`${response.status} `);
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  async #fetchData(id = undefined) {
    try {
      let response;
      if (!id) {
        response = await fetch(this.#url);
      } else {
        const url = this.#url + "/" + id;
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
