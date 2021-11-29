import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

import cartReducer from "./cartReducer";
import productsReducer from './productsStore';

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart') || '[]'),
  products: JSON.parse(localStorage.getItem('products') || '[]'),
}

const rootReducer = combineReducers({
  cartReducer,
  productsReducer,
});

// export const getCart = (cart) => cart.cartReducer;

const store = createStore(
  rootReducer, 
  initialState,
  composeWithDevTools(applyMiddleware(thunk)));

export default store;
