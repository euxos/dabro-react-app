import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import cartReducer from './cartReducer';
import productsReducer from './productsReducer';
import mobNavReducer from "./mobNavReducer";

const initialState = {
    cart: JSON.parse(localStorage.getItem('cartProducts')) || [],
    products: JSON.parse(localStorage.getItem('products')) || [],
    isOpened: false,
}

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    isOpened: mobNavReducer,
});

export const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);
