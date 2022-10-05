import { applyMiddleware, createStore, compose } from "redux";
import { toggleReduser } from './reduser';

const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(toggleReduser, composeEnhansers(applyMiddleware()));