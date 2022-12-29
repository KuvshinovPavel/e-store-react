import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {productsReducer} from "./reducers/productsReducer";
import {categoriesReducer} from "./reducers/categoriesReducer";
import {authReducer} from "./reducers/authReducer";

const rootReducer =
    combineReducers({
        products: productsReducer,
        categories: categoriesReducer,
        auth: authReducer,
    })
export const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch