import './product-card.styles.scss';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { addToCart } from '../../store/cart/cart.slice';
import { ChangeEvent } from 'react';
import { useAppDispatch } from '../../store/hook';
import { CategoryItem } from '../../store/categories/categories.slice';


export const ProductCard = ({product} : {product: CategoryItem} ) => {
    const {name, price, imageUrl} = product;
    const dispatch = useAppDispatch();

    const handleClick = (event: ChangeEvent) => {
        dispatch(addToCart(product));
    }
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} buttonOptions={{onClick: handleClick}}>Add to cart</Button>
        </div>
    );
}

export default ProductCard;