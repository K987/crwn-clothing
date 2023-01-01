import { Fragment } from "react";
import { CategoryPreview } from "../../components/category-preview/category-preview.component"
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/categories.selector";

const CategoriesPreview = () => {
    const categories = useSelector(selectCategories);
    return (
        <Fragment>
            {
                Object.keys(categories).map(title => 
                    <CategoryPreview key={title} title={title} products={categories[title]} />        
                )
            }
        </Fragment>

    );
};

export default CategoriesPreview;