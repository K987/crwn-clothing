import { Fragment } from "react";
import { CategoryPreview } from "../../components/category-preview/category-preview.component"
import { selectCategories } from "../../store/categories/categories.selector";
import { useAppSelector } from "../../store/hook";

const CategoriesPreview = () => {
    const categories = useAppSelector(selectCategories);
    return (
        <Fragment>
            {
                Object.keys(categories).map(title => 
                    <CategoryPreview key={title} title={title} items={categories[title]} />        
                )
            }
        </Fragment>

    );
};

export default CategoriesPreview;