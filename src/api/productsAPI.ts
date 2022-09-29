import axios from "axios";


const instance = axios.create({
    baseURL: 'http://localhost:5000/products'
})
export const productsAPI = {

    fetchProductById: (id: number) => instance.get('/fetch', {
        params: {
            id: id
        }
    }),

    fetchProductsByCategory: (categoryId: number) => instance.get('/fetchbyc', {
        params: {
            cid: categoryId
        }
    }),
    fetchAllProducts: () => instance.get('/'),

    findProducts: (substring: string) => instance.get('/find', {
        params: {
            s: substring
        }
    })


}

