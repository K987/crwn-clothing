import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Category } from '../../routes/home/home.component';
import './category-item.styles.scss'

const CategoryItem = ({category} : {category: Category}) => {
  const { title, imageUrl } = category;
  const navigate = useNavigate();
  const clickHandler = (event: React.MouseEvent): void => navigate(`shop/${title.toLowerCase()}`);

  return (
    <div className='category-item-container' onClick={clickHandler}>
      <div className='background-image' 
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
      />
      <div className='category-body-container'>
        <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
    </div>
  )
}

export default CategoryItem;