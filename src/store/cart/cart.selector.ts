import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectShowCart = (state: RootState) => state.cart.showCart;
export const selectCartItems = (state: RootState) => state.cart.cartItems;
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc, item) => acc + item.quantity, 0)
    );
export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc, item) => acc + (item.quantity * item.price), 0)
    );