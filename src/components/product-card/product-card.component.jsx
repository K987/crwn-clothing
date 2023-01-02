import './product-card.styles.scss';
import Button from '../button/button.component';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cart/cart.slice';

export const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const dispatch = useDispatch();

    const handleClick = (event) => {
        dispatch(addToCart(product));
    }
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted' buttonOptions={{onClick: handleClick}}>Add to cart</Button>
        </div>
    );
}

export default ProductCard;