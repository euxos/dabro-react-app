import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import productsReducer from './dataBaseReducer';
import mobNavReducer from "./mobNavReducer";

const initialState = {
    dataBase: [],
    isOpened: false,
};

const rootReducer = combineReducers({
    dataBase: productsReducer,
    isOpened: mobNavReducer,
});

export const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);
