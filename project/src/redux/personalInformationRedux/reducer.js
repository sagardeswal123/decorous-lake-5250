import { CUSTOMER_DATA, CUSTOMER_DETAILS_FAILURE, CUSTOMER_DETAILS_LOADING, CUSTOMER_DETAILS_SUCCESS } from "./actionType"

const init={
    personalData:[],
    isLoading:false,
    isError:false,
}

export const reducer =(state=init,{type,payload})=>{
    switch(type){
        case CUSTOMER_DETAILS_LOADING:return {
            ...state,isLoading:true
        }
        case CUSTOMER_DETAILS_SUCCESS:return {
            ...state,isLoading:false
        }
        case CUSTOMER_DETAILS_FAILURE:return {
            ...state,isLoading:false,isError:true
        }

        default: return state
    }
}

export const reducer1 =(state=init,{type,payload})=>{
    switch(type){

        case CUSTOMER_DATA:return {
            ...state,isLoading:false,personalData:payload
        }

        default: return state
    }
}