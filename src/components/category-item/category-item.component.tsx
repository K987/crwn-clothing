import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Category } from '../../routes/home/home.component';
import { BackgroundImage, CategoryBodyContainer, CategoryItemContainer } from './category-item.styles';

const CategoryItem = ({category} : {category: Category}) => {
  const { title, imageUrl } = category;
  const navigate = useNavigate();
  const clickHandler = (event: React.MouseEvent): void => navigate(`shop/${title.toLowerCase()}`);

  return (
    <CategoryItemContainer onClick={clickHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <CategoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryBodyContainer>
    </CategoryItemContainer>
  )
}

export default CategoryItem;