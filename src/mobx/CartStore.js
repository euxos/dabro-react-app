import { makeAutoObservable } from "mobx";

class CartStore {

  cartItems = this.cartItems || [];
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  addCartItem(cartItem) {
    this.cartItems.push(cartItem);
    this.count = this.count + 1;
  };

  removeCartItem(id) {
    this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== id);
    this.count = this.count - 1;
  }

  get cartList() {
    return this.cartItems;
  };
}

export default new CartStore();