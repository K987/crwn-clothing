import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import { selectCategories } from '../../store/categories/categories.selector';
import { useAppSelector } from '../../store/hook';
import './category.styles.scss';

type CategoryRouteParams = {
    category: string;
  };

const Category = () => {
    const {category} = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
    const categories = useAppSelector(selectCategories);
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