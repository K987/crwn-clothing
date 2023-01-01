import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import categoriesSlice from "./categories/categories.slice";
import userSlice from "./user/user.slice";


export const store = configureStore({
    reducer: {
        user: userSlice,
        categories: categoriesSlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
    
});