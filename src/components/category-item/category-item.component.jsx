import { useNavigate } from 'react-router-dom';
import './category-item.styles.scss'

const CategoryItem = ({category}) => {
  const navigate = useNavigate();
  const {imageUrl, title} = category;
  const clickHandler = (event) => navigate(`shop/${title.toLowerCase()}`);

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