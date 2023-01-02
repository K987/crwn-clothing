import { createSelector } from "@reduxjs/toolkit";

export const selectShowCart = state => state.cart.showCart;
export const selectCartItems = state => state.cart.cartItems;
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc, item) => acc + item.quantity, 0)
    );
export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc, item) => acc + (item.quantity * item.price), 0)
    );