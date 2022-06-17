import {Dispatch} from "redux";
import {ProductsActionTypes} from "../types/productsTypes";
import axios from "axios";
import {productsAPI} from "../../api/productsAPI";

export const fetchProducts=(categoryId: number | null)=>{
    return async (dispatch:Dispatch)=>{
        try{

            const response = await productsAPI.fetchProducts(categoryId)
                .then(({data})=> {
                    dispatch({type:ProductsActionTypes.FETCH_PRODUCTS, payload:data});
                })
        }
        catch (e){
            console.log(e)
        }
    }
}

// export const fetchProductsByCategoryId=(categoryId: number)=>{
//     return async (dispatch:Dispatch)=>{
//         try{
//
//             const response = await productsAPI.fetchProductsByCategoryId(categoryId)
//                 .then(({data})=> {
//                     dispatch({type:ProductsActionTypes.FETCH_PRODUCTS_BY_CATEGORY, payload:data});
//                 })
//         }
//         catch (e){
//             console.log(e)
//         }
//     }
// }

