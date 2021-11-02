import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import filters from "./filters";
import pizzas from "./pizzas";
import cart from "./cart";
import pizzaBlock from "./pizzaBlock";

function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

let reducers = combineReducers({
  filters,
  pizzas,
  cart,
  pizzaBlock,
});

let store = createStore(reducers, loadFromLocalStorage(), applyMiddleware(thunk));

store.subscribe(() => saveToLocalStorage(store.getState()));

window.store = store;

export default store;
