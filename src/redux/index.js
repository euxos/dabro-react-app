import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  cartReducer,
});

const initialState = {
  cart: [JSON.parse(localStorage.getItem('cart') || '[]')],
}

// export const getCart = (cart) => cart.cartReducer;

const store = createStore(
  rootReducer, 
  initialState,
  composeWithDevTools(applyMiddleware(thunk)));

export default store;
