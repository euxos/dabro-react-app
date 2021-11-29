import CartStore from "./CartStore";
import ProductsStore from "./ProductsStore";

class RootStore {
  constructor() {
    this.cartStore = new CartStore(this);
    this.productsStore = new ProductsStore(this);
  }
}

const rootStore = new RootStore();

export default rootStore;
