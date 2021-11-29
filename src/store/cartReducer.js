const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const SET_CART_QUANTITY = 'SET_CART_QUANTITY';

export const addToCart = (product, quantity = 1) => (
  {
    type: ADD_TO_CART,
    product,
    quantity,
  }
);

export const removeFromCart = (product) => (
  {
    type: REMOVE_FROM_CART,
    product,
  }
);

export const setCartQuantity = (product, quantity) => (
  {
    type: SET_CART_QUANTITY,
    product,
    quantity,
  }
);

const cartReducer = (cart = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [
        ...cart,
        {
          product: action.product,
          quantity: action.quantity,
        },
      ];

    case REMOVE_FROM_CART:
      return cart.filter(item => item.product.id !== action.product.id);

    case SET_CART_QUANTITY:
      return cart.map(item => (
        item.product.id === action.product.id
          ? {
            product: action.product,
            quantity: action.quantity,
          }
          : item
      ));

    default:
      return cart;
  }
};

export default cartReducer;