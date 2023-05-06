import { CUSTOMER_DETAILS_FAILURE, CUSTOMER_DETAILS_LOADING, CUSTOMER_DETAILS_SUCCESS } from "./actionType"

const init={
    custom_data:[],
    isLoading:false,
    isError:false,
}

const reducer =(state=init,{type,payload})=>{
    switch(type){
        case CUSTOMER_DETAILS_LOADING:return {
            ...state,isLoading:true
        }
        case CUSTOMER_DETAILS_SUCCESS:return {
            ...state,isLoading:false,custom_data:payload
        }
        case CUSTOMER_DETAILS_FAILURE:return {
            ...state,isLoading:false,isError:true
        }

        default: return state
    }
}