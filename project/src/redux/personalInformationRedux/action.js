import { CUSTOMER_DETAILS_FAILURE, CUSTOMER_DETAILS_LOADING, CUSTOMER_DETAILS_SUCCESS } from "./actionType"

const postData=(data)=(dispatch)=>{
dispatch({type:CUSTOMER_DETAILS_LOADING})
const res = axios.post("url",data)
.then((res)=>dispatch({type:CUSTOMER_DETAILS_SUCCESS,payload:res.data}))
.catch((res)=>dispatch({type:CUSTOMER_DETAILS_FAILURE}))
return res.data
}