import {Dispatch} from "redux";
import {authAPI} from "../../api/authAPI";
import {AuthActionTypes} from "../types/authTypes";

export const login = (email: string, password: string) => {
    return async (dispatch: Dispatch) => {
        try {
            await authAPI.login(email, password).then(({data}) => {
                dispatch({type: AuthActionTypes.LOGIN, payload: data});
                localStorage.setItem('token', data.token);
                const customer: string = JSON.stringify(data.customer);
                localStorage.setItem('customer', customer)

            })
        } catch (e) {
            console.log(e)
        }
    }
}

export const register = (firstname: string, lastname: string, email: string, password: string) => {
    return async (dispatch: Dispatch) => {
        try {
            await authAPI.register(firstname, lastname, email, password).then(({data}) => {
                dispatch({type: AuthActionTypes.REGISTRATION, payload: data});
                localStorage.setItem('token', data.token);
                const customer: string = JSON.stringify(data.customer);
                localStorage.setItem('customer', customer)
            })
        } catch (e) {
            console.log(e)
        }
    }
}


export const logout=()=>{
    return (dispatch: Dispatch)=>{
        localStorage.removeItem('token');
        localStorage.removeItem('customer');
        dispatch({type: AuthActionTypes.LOGOUT})
    }
}