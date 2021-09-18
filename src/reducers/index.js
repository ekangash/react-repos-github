import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import reposReducer from "./reposReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

//Библиотека redux является синхронной, а thunk решает проблему асинхроностей.

const rootReducer = combineReducers({
        repos: reposReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))