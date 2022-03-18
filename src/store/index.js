import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import dataReducer from "./dataReducer";
import noteReducer from "./noteReducer";

const initialState = {
	data: [],
	note: {},
};

const rootReducer = combineReducers({
	data: dataReducer,
	note: noteReducer,
});

export const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(thunk))
);
