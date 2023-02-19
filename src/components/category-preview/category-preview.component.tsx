import { useNavigate } from 'react-router-dom';
import { CategoryItem } from '../../store/categories/categories.slice';
import { ProductCard } from '../product-card/product-card.component';
import './category-preview.styles.scss';

export type CategoryPreviewProps = {
    title: string,
    items: CategoryItem[],
};

export const CategoryPreview = ({title, items} : CategoryPreviewProps) => {
    const navigate = useNavigate();
    const clickHandler = (event: React.MouseEvent) => navigate(`${title.toLowerCase()}`);

    return (
        <div className='category-preview-container'>
            <h2>
                <span className='title' onClick={clickHandler}>{title.toUpperCase()}</span>
            </h2>
            <div className='preview'>
                {
                    items
                        .filter((_, idx) => idx < 4)
                        .map(product => 
                            <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>

    );
};

export default CategoryPreview;