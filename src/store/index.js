import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import dataReducer from "./dataReducer";

const initialState = {
	data: [],
};

const rootReducer = combineReducers({
	data: dataReducer,
});

export const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(thunk))
);
