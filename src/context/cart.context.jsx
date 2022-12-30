import { createContext, useReducer } from "react"; 

const addToCart = (itemToAdd, state) => {
    const {cartItems, total, itemsCount} = state;
    const foundItem = cartItems.find(item => item.id === itemToAdd.id);

    let newCart = [];
    if (foundItem) {
        newCart = cartItems.map(
            item => item.id === itemToAdd.id
            ? {...item, quantity: item.quantity + 1} 
            : item
        );
    }
    else {
        newCart = [...cartItems, {...itemToAdd, quantity: 1}];
    }

    return {cartItems: newCart, total: total + itemToAdd.price, itemsCount: itemsCount + 1 };
};

const removeFromCart = (itemToRemove, state) => {
    const {cartItems, total, itemsCount} = state;
    const foundItem = cartItems.find(item => item.id === itemToRemove.id);
    
    let newCart = [];
    if (foundItem.quantity === 1) {
        newCart = cartItems.filter(item => item.id !== itemToRemove.id);
    }
    else {
        newCart =  cartItems
        .map(item => item.id === itemToRemove.id ? {...item, quantity: item.quantity - 1} : item);
    }

    return {cartItems: newCart, total: total - itemToRemove.price, itemsCount: itemsCount - 1 };
};

const clearFromCart = (itemToClear, state) => {
    const {cartItems, total, itemsCount} = state;
    const toRemove = cartItems.find(item => itemToClear.id === item.id);
    if (toRemove) {
        return {
            cartItems: cartItems.filter(item => item.id !== itemToClear.id), 
            total: total - (toRemove.quantity * itemToClear.price), 
            itemsCount: itemsCount - toRemove.quantity};
    } 
    else {
        return {cartItems, total, itemsCount};
    } 

};

const INITIAL_STATE = {
    showChart: false,
    
    cartItems: [],
    total: 0,
    itemsCount: 0,

    toggleShowCart: () => {},
    
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {}
 };

export const CartContext = createContext(INITIAL_STATE);

export const CART_ACTIONS = {
    ADD_ITEM_TO_CART: 'addItemToCart',
    REMOVE_ITEM_FROM_CART: 'removeItemFromCart',
    CLEAR_ITEM_FROM_CART: 'clearItemFromCart',
    TOGGLE_SHOW_CART: 'toggleShowCart',
}

const cartReducer = (state, {type, payload}) => {

    switch (type) {
        case CART_ACTIONS.ADD_ITEM_TO_CART: 
            return {
                ...state,
                ...addToCart(payload, state),
            }
        case CART_ACTIONS.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                ...removeFromCart(payload, state),
            }
        case CART_ACTIONS.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                ...clearFromCart(payload, state),
            }
        case CART_ACTIONS.TOGGLE_SHOW_CART:
            return {
                ...state,
                showCart: !state.showChart,
            }
        default:
            throw new Error(`invalid action: ${type}`);
    }
};

export const CartProvider = ({children}) => {

    const [{ showCart, cartItems, total, itemsCount }, dispatch] = useReducer(cartReducer, INITIAL_STATE);
    
    const addItemToCart = item => {
        dispatch({type: CART_ACTIONS.ADD_ITEM_TO_CART, payload: item});         
    }

    const removeItemFromCart = item => {
        dispatch({type: CART_ACTIONS.REMOVE_ITEM_FROM_CART, payload: item});

    }

    const clearItemFromCart = item => {
        dispatch({type: CART_ACTIONS.CLEAR_ITEM_FROM_CART, payload: item});
    }

    const toggleShowCart = () => {
        dispatch({type: CART_ACTIONS.TOGGLE_SHOW_CART, payload: null});
    }

    const value = {
        showCart, 
        cartItems, 
        total, 
        itemsCount, 
        addItemToCart, 
        removeItemFromCart, 
        clearItemFromCart, 
        toggleShowCart,
    };

    return (<CartContext.Provider value={value}>{children}</CartContext.Provider>);
};