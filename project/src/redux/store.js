import thunk from "redux-thunk";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {reducer as PostDataReducer} from "./personalInformationRedux/reducer"
import {reducer1 as getData} from "./personalInformationRedux/reducer"

const rootReducer=combineReducers({
    AuthReducer,
    PostDataReducer,
    getData
})


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));





