import {Dispatch} from "redux";
import {ProductsActionTypes} from "../types/productsTypes";
import axios from "axios";
import {productsAPI} from "../../api/productsAPI";

export const fetchAllProducts = () => {
    return async (dispatch: Dispatch) => {
        try {
            await productsAPI.fetchAllProducts()
                .then(({data}) => {
                    dispatch({type: ProductsActionTypes.FETCH_PRODUCTS, payload: data});
                })
        } catch (e) {
            console.log(e)
        }
    }
}

export const fetchProductsByCategory = (categoryId: number) => {
    return async (dispatch: Dispatch) => {
        try {
            await productsAPI.fetchProductsByCategory(categoryId)
                .then(({data})=>{
                    dispatch({type: ProductsActionTypes.FETCH_PRODUCTS, payload: data})
                })
        } catch (e) {
            console.log(e)
        }
    }
}

export const findProducts = (substring: string) => {
    return async (dispatch: Dispatch) => {
        try {
            await productsAPI.findProducts(substring)
                .then(({data}) => {
                    dispatch({type: ProductsActionTypes.FIND_PRODUCTS, payload: data})
                })
        } catch (e) {
            console.log(e);
        }
    }
}
export const fetchProduct = (id: number) => {
    return async (dispatch: Dispatch) => {
        try {
            await productsAPI.fetchProductById(id)
                .then(({data}) => {
                    dispatch({type: ProductsActionTypes.FETCH_PRODUCTS, payload: data})
                })
        } catch (e) {
            console.log(e);
        }
    }
}