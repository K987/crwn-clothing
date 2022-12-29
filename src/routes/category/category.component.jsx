import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoriesContext } from '../../context/categories.context';
import './category.styles.scss';

const Category = () => {
    const {category} = useParams();
    const {categories} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categories[category]);
    useEffect(() => {setProducts(categories[category])}, [categories, category]);
    return (
        <div className='category-container'>
            {
                products && products.map(product => <ProductCard key={product.id} product={product} />)
            }
        </div>
    );

};

export default Category;