import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";

const initialValue = {
    isAuth : false,
    loading : true,
    error: false,
    isError:"",
}

export const reducer = (state=initialValue,{type,payload})=>{
    switch (type) {
        case LOGIN_REQUEST:
            return {
                ...state,loading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,loading: false,isAuth:true
            }
        case LOGIN_FAIL:
            return {
                ...state,loading: false,isAuth:false,error:true,isError:payload
            }
        
        default:
            return state;
    }
}