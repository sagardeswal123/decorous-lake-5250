import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as AuthReducer } from "./AuthReducer/reducer";

const rootReducer=combineReducers({
    AuthReducer,
})


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as PostDataReducer} from "./personalInformationRedux/reducer"
import {reducer1 as getData} from "./personalInformationRedux/reducer"
const rootReducer = combineReducers({
PostDataReducer,
getData

});

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));


