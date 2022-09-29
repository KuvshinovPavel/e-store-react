export type ProductsAction = {
    payload: any,
    type: string
}

export enum ProductsActionTypes{
    FETCH_PRODUCTS='SET_PRODUCTS',
    FETCH_PRODUCTS_BY_CATEGORY='SET_PRODUCTS',
    SET_LOADED='SET_LOADED',
    FIND_PRODUCTS='FIND_PRODUCTS'
}