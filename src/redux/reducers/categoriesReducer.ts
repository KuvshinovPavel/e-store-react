import {CategoriesAction, CategoriesActionTypes} from "../types/categoriesTypes";

const initState = {
    selectedCategory: null
}

export const categoriesReducer = (state = initState, action: CategoriesAction) => {
    if (action.type === CategoriesActionTypes.SET_CATEGORY) {
        return {
            ...state,
            selectedCategory: action.payload
        }
    }
   

    return {
        ...state
    }
}