import axios from "axios";
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS,REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS,USER_LOGOUT } from "./actionType"
const url="https://server-cepv.onrender.com/SignUpData"
export const loginUser =(params)=>(dispatch)=>{
    dispatch({type:LOGIN_REQUEST});
   return axios.get(url,{params:params})
   .then((res)=>dispatch({type:LOGIN_SUCCESS,payload:res.data}))
   .catch(err=>dispatch({type:LOGIN_FAIL}))
   
}

export const registerUser =(params)=>(dispatch)=>{
    dispatch({type:REGISTER_REQUEST});
   return axios.post(url, params)
      .then(function (res) {
        dispatch({type:REGISTER_SUCCESS});
      })
      .catch(function (err) {
        dispatch({type:REGISTER_FAIL});
      });
   
}

export const Logout=(dispatch)=>{
  dispatch({type:USER_LOGOUT})
}