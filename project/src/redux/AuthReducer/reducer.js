import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS,REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS, } from "./actionType"

const initialValue = {
    isAuth : false,
    isLoading : false,
    isError:"",
    data:[]
}

export const reducer = (state=initialValue,{type,payload})=>{
    switch (type) {
        case LOGIN_REQUEST:
            return {
                ...state,isLoading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,isLoading: false,isAuth:true,data:payload
            }
        case LOGIN_FAIL:
            return {
                ...state,isLoading: false,isError:true
            }
            case REGISTER_REQUEST:
                return {
                    ...state,isLoading: true
                }
            case REGISTER_SUCCESS:
                return {
                    ...state,isLoading: false,
                }
            case REGISTER_FAIL:
                return {
                    ...state,isLoading: false,isError:true
                }
            
        
        default:
            return state;
    }
}