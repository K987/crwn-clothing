import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CategoryItem } from "../categories/categories.slice"

export type CartItemElement = {
    quantity: number,
} & CategoryItem

type CartState = {
    readonly showCart: boolean,
    readonly cartItems: Array<CartItemElement>
};

const INITIAL_STATE: CartState = {
    showCart: false,
    cartItems: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        addToCart: (state, action: PayloadAction<CategoryItem>) => {
            const { cartItems } = state;
            const itemToAdd = action.payload;

            const itemIndex = cartItems.findIndex(item => item.id === itemToAdd.id);
            if (itemIndex === -1) {
                state.cartItems.push({...itemToAdd, quantity: 1});
            } else {
                state.cartItems[itemIndex].quantity++
            }
        },
        removeFromCart: (state, action: PayloadAction<CartItemElement>) => {
            const itemToRemove = action.payload;
            const { cartItems } = state;
            
            const itemIndex = cartItems.findIndex(item => item.id === itemToRemove.id);
            if (itemIndex === -1) {
                //do nothing if item not in cart
            }
            else if (cartItems[itemIndex].quantity === 1) {
                state.cartItems.splice(itemIndex, 1);
            } else {
                state.cartItems[itemIndex].quantity--;
            }
        },
        clearFromCart: (state, action: PayloadAction<CartItemElement>) => {
            const itemToClear = action.payload;
            const { cartItems } = state;
            
            const itemIndex = cartItems.findIndex(item => item.id === itemToClear.id);
            if (itemIndex === -1) {
                //do nothing if item not in cart

            } else {
                state.cartItems.splice(itemIndex, 1);
            }            
        },
        toggleShowCart: (state, _action: PayloadAction<void>) => {
            state.showCart = !state.showCart;
        }
    }
});

export const {addToCart, removeFromCart, clearFromCart, toggleShowCart} = cartSlice.actions;
export default cartSlice.reducer;