import { IProduct } from './IProduct.js';

export interface ICartItem extends IProduct {
    quantity: number;
}