import { createContext } from 'react';
import SHOP_DATA from '../shop-data.json';

export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvider = ({children}) => {
    const value = {
        products: SHOP_DATA,
    }
    return (<ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>)
}