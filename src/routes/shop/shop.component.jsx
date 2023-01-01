
import './shop.styles.scss';
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { getCategotriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import { setCategories } from '../../store/categories/categories.slice';

const Shop = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const getGategoriesMap = async () => {
            const map = await getCategotriesAndDocuments();
            dispatch(setCategories(map));
        };
        getGategoriesMap();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />}/>
        </Routes>

    );
};

export default Shop;