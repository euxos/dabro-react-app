import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import cartReducer from './cartReducer';
import productsReducer from './dataBaseReducer';
import mobNavReducer from "./mobNavReducer";

const initialState = {
    cart: [],
    dataBase: [],
    isOpened: false,
};

const rootReducer = combineReducers({
    cart: cartReducer,
    dataBase: productsReducer,
    isOpened: mobNavReducer,
});

export const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);
