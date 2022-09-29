import {ProductsAction, ProductsActionTypes} from "../types/productsTypes";
import {ProductProps} from "../../types/ProductProps";

const initState = {
    items: [] || {} as ProductProps || {},
    loaded: false
}

export const productsReducer = (state = initState, action: ProductsAction) => {
    if (action.type === ProductsActionTypes.FETCH_PRODUCTS) {
        return {
            ...state,
            items: action.payload,
            loaded: true
        }
    } else if (action.type === ProductsActionTypes.SET_LOADED) {
        return {...state, loaded: action.payload}
    } else if (action.type === ProductsActionTypes.FIND_PRODUCTS) {
        return {...state, items: action.payload}
    }

    return {
        ...state
    }
}