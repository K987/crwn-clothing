import { createContext, useState } from "react"; 

const updateCart = (newItem, cartItems) => {
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

export const CartContext = createContext({
    showChart: false,
    toggleShowCart: () => {},
    cartItems: [],
    addItemToCart: () => {},
 });

export const CartProvider = ({children}) => {
    const [showCart, toggleShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]); 
    
    const addItemToCart = (item) => {
        const newCart = updateCart(item, cartItems)
        setCartItems(newCart);         
    }

    const value = {showCart, toggleShowCart, cartItems, addItemToCart};

    return (<CartContext.Provider value={value}>{children}</CartContext.Provider>);
};