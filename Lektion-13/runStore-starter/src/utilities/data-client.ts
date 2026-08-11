import { settings } from '../config/settings.js';
import { IProduct } from '../models/IProduct.js';
import { IUser } from '../models/IUser.js';

export default class DataClient {
  #data: IProduct[] | IProduct = [];
  #url = '';

  constructor (resource: string) {
    this.#url = `${settings.BASE_API_URL}/${resource}`;
  }

  async add(data: any) {
    const success = await this.#addData(data);
    return success;
  }

  async listAll(): Promise<IProduct[]> {
    await this.#fetchData(undefined);
    return this.#data as IProduct[];
  }

  async login(data: any) {
    try {
      const response = await fetch(this.#url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        return await response.json();
      }

      throw new Error(`${response.status} - ${response.statusText}`);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  async findById(id: string): Promise<IProduct> {
    await this.#fetchData(id);
    return this.#data as IProduct;
  }

  async getUserInfo(token: string): Promise<IUser | null> {
    try {
      const response = await fetch(this.#url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        return await response.json() as IUser;
      } else {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
    } catch (error: any) {
      console.log(error.message);
      return null;
    }
  }

  async logOut() {
    try {
      const response = await fetch(this.#url, {
        method: 'POST',
      });

      if (response.status !== 204) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }

  async #addData(data: any) {
    try {
      const response = await fetch(this.#url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.status === 201) {
        return true;
      } else {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }

  async #fetchData(id: string | undefined) {
    try {
      let response;
      if (!id) {
        response = await fetch(this.#url);
      } else {
        const url = this.#url + '/' + id;
        response = await fetch(url);
      }

      if (response.ok) {
        const result = await response.json() as IProduct[];
        this.#data = result;
        return;
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }
}
