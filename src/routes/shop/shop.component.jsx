
import './shop.styles.scss';
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../../store/categories/categories.slice';

const Shop = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchUsersData() {
            dispatch(fetchUsers());
        }
        fetchUsersData();
    }, [dispatch]);

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />}/>
        </Routes>

    );
};

export default Shop;