import { CategoryItem } from '../../store/categories/categories.slice';
import { ProductCard } from '../product-card/product-card.component';
import { CategoryPreviewContainer, Preview, Title } from './category-preview.styles';

export type CategoryPreviewProps = {
    title: string,
    items: CategoryItem[],
};

export const CategoryPreview = ({title, items} : CategoryPreviewProps) => {

    return (
        <CategoryPreviewContainer>
            <h2>
                <Title to={title.toLowerCase()}>{title.toUpperCase()}</Title>
            </h2>
            <Preview>
                {
                    items
                        .filter((_, idx) => idx < 4)
                        .map(product => 
                            <ProductCard key={product.id} product={product} />)
                }
            </Preview>
        </CategoryPreviewContainer>

    );
};

export default CategoryPreview;