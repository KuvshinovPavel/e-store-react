import {ProductsAction, ProductsActionTypes} from "../types/productsTypes";

const initState = {
    items: [],
    loaded: false
}

export const productsReducer = (state = initState, action: ProductsAction) => {
    if (action.type === ProductsActionTypes.FETCH_PRODUCTS) {
        return {
            ...state,
            items: action.payload,
            loaded: true
        }
    }

    else if (action.type === ProductsActionTypes.SET_LOADED) {
        return {...state, loaded: action.payload}
    }

    return {
        ...state
    }
}