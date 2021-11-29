import { makeAutoObservable } from "mobx";

class ProductsStore {

  products = this.products || [];
  
  constructor() {
    makeAutoObservable(this);
  }

  setProducts = products => {
    this.products = products;
  };
  
  get productsList() {
    return this.products;
  };
  
}

export default ProductsStore;
