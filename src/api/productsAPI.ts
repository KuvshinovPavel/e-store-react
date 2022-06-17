import axios from "axios";

export const productsAPI = {
    fetchProducts: (categoryId: number | null) => axios.get('http://localhost:3001/products',{
        params:{
            categoryId: categoryId?categoryId:''
        }
    }),
    // fetchProductsByCategoryId: (categoryId: number) => axios.get('http://localhost:3001/products', {
    //     params: {
    //         categoryId: categoryId?categoryId:''
    //     }
    // })


}

