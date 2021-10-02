import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"

import SearchReducer from "./reducers/search";


let reducers = combineReducers({
    SearchReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;