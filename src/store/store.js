import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import cartSlice from "./cart/cart.slice";
import categoriesSlice from "./categories/categories.slice";
import userSlice from "./user/user.slice";


export const store = configureStore({
    reducer: {
        user: userSlice,
        categories: categoriesSlice,
        cart: cartSlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger), 
});