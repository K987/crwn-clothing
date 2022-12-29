import { createContext, useEffect, useState } from 'react';
import { getCategotriesAndDocuments } from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext({
    categories: {},
});

export const CategoriesProvider = ({children}) => {
    const [categories, setCategories] = useState({});
    useEffect(() => {
        const getGategoriesMap = async () => {
            const map = await getCategotriesAndDocuments();
            setCategories(map);
        };
        getGategoriesMap();
    }, []);
    return (<CategoriesContext.Provider value={{categories}}>{children}</CategoriesContext.Provider>)
}