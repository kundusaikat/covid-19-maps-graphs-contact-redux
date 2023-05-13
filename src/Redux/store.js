import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { contactReducer } from "./Contact/contact.reducer";

const rootReducer = combineReducers({
  contact: contactReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;

