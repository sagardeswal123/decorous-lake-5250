import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType"

export const LoginReducer =(obj)=>(dispatch)=>{
    dispatch({type:LOGIN_REQUEST});
    if(obj===1){
        dispatch({type:LOGIN_SUCCESS})
    }else if(obj===0){
        dispatch({type:LOGIN_FAIL,payload:"Wrong credentials"})
    }
}