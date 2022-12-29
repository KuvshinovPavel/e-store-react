import {AuthAction, AuthActionTypes} from "../types/authTypes";
import {Customer} from "../types/payloadDto/customer";


const token = localStorage.getItem('token');
const  stringifiedCustomer  = localStorage.getItem('customer')||'{}';
const customer:Customer = JSON.parse( stringifiedCustomer ) || {};


const initState = {
    customer: customer || {} as Customer,
    isAuth: !!token
}


export const authReducer = (state = initState, action: AuthAction) => {
    if (action.type === AuthActionTypes.LOGIN) {
        return {
            ...state,
            isAuth: true,

        }
    } else if (action.type === AuthActionTypes.REGISTRATION) {
        return {...state, isAuth: true,};
    } else if (action.type === AuthActionTypes.LOGOUT) {
        return {...state, isAuth: false,}
    }

    return {
        ...state
    }


}