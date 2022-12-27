import { createContext, useState } from "react"; 

const addToCart = (newItem, cartItems) => {
    const foundItem = cartItems.find(item => item.id === newItem.id);
    if (foundItem) {
        return cartItems.map(
            item => item.id === newItem.id
            ? {...item, quantity: item.quantity + 1} 
            : item
        );
    }
    else {
        return [...cartItems, {...newItem, quantity: 1}];
    }
};

const removeFromCart = (itemId, cartItems) => {
    const foundItem = cartItems.find(item => item.id === itemId);
    if (foundItem.quantity === 1) {
        return cartItems.filter(item => item.id !== itemId);
    }
    else {
        return cartItems.map(item => item.id === itemId ? {...item, quantity: item.quantity - 1} : item);
    }
};

const clearItem = (itemId, cartItems) => {
    return cartItems.filter(item => item.id !== itemId);
};

export const CartContext = createContext({
    showChart: false,
    toggleShowCart: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {}
 });

export const CartProvider = ({children}) => {
    const [showCart, toggleShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]); 
    
    const addItemToCart = (item) => {
        const newCart = addToCart(item, cartItems)
        setCartItems(newCart);         
    }

    const removeItemFromCart = item => {
        const newCart = removeFromCart(item.id, cartItems);
        setCartItems(newCart);
    }

    const clearItemFromCart = item => {
        const newCart = clearItem(item.id, cartItems);
        setCartItems(newCart);
    }

    const value = {showCart, toggleShowCart, cartItems, addItemToCart, removeItemFromCart, clearItemFromCart};

    return (<CartContext.Provider value={value}>{children}</CartContext.Provider>);
};