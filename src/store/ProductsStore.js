import { makeAutoObservable } from "mobx";

export default class ProductsStore {
  constructor() {
    this._categories = [
      { id: 1, name: "burgers" },
      { id: 2, name: "rolls" },
    ];
    this._products = [
      { id: 1, name: "cheesburger" },
      { id: 2, name: "shawerma" },
    ];
    makeAutoObservable(this);
  }

  setCategories(category) {
    this._categories = category;
  }
  setProducts(product) {
    this._products = product;
  }

  get categories() {
    return this._categories;
  }
  get products() {
    return this._products;
  }
}
