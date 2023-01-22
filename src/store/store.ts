import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import cartSlice from "./cart/cart.slice";
import categoriesSlice from "./categories/categories.slice";
import userSlice from "./user/user.slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'


const combinedReducers = combineReducers({
    user: userSlice,
    categories: categoriesSlice,
    cart: cartSlice,
})

const persistConfig = {
    key: 'root',
    storage,
    version: 0,
    blacklist: ['user']
}

export const store = configureStore({
    reducer: persistReducer(persistConfig, combinedReducers),
    middleware: getDefaultMiddleware => {
        if (process.env.NODE_ENV !== 'production') {
            return getDefaultMiddleware().concat(logger)
        }
        return getDefaultMiddleware();
    }
});

export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

