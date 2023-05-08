import axios from "axios"
import { CUSTOMER_DATA, CUSTOMER_DETAILS_FAILURE, CUSTOMER_DETAILS_LOADING, CUSTOMER_DETAILS_SUCCESS } from "./actionType"

 export const postData=(data)=>(dispatch)=>{
    console.log(data)
dispatch({type:CUSTOMER_DETAILS_LOADING})
const res = axios.post("https://wandering-newt-hat.cyclic.app/data",data)
.then((res)=>dispatch({type:CUSTOMER_DETAILS_SUCCESS}))
.catch((res)=>dispatch({type:CUSTOMER_DETAILS_FAILURE}))
}

export const getData = () => async (dispatch) => {
    try {
      const response = await axios.get("https://wandering-newt-hat.cyclic.app/data");
      dispatch({ type: CUSTOMER_DATA, payload: response.data });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  
