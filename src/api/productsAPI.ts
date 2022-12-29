import axios from "axios";
import {instance} from "./index";



export const productsAPI = {

    fetchProductById: (id: number) => instance.get('/products/fetch', {
        params: {
            id: id
        }
    }),

    fetchProductsByCategory: (categoryId: number) => instance.get('/products/fetchbyc', {
        params: {
            cid: categoryId
        }
    }),
    fetchAllProducts: () => instance.get('/products'),

    findProducts: (substring: string) => instance.get('/products/find', {
        params: {
            s: substring
        }
    })


}

