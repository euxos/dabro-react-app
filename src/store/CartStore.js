import { makeAutoObservable } from "mobx";

export default class CartStore {
  constructor() {
    this._products = [
      { id: 1, name: "cheesburger" },
      { id: 2, name: "shawerma" },
    ];
    makeAutoObservable(this);
  }

  setProducts(product) {
    this._products = product;
  }

  get products() {
    return this._products;
  }
}