import { addToCart, clearFromCart, removeFromCart, CartItemElement } from '../../store/cart/cart.slice';
import { useAppDispatch } from '../../store/hook';
import './checkout-item.styles.scss';


const CheckoutItem = ({checkoutItem}: {checkoutItem: CartItemElement}) => {
    const dispatch = useAppDispatch();
    const {imageUrl, name, quantity, price} = checkoutItem;

    const handleDecrease = () => {
        dispatch(removeFromCart(checkoutItem));
    };
    const handleIncrease = () => {
        dispatch(addToCart(checkoutItem));
    };
    const handleRemove = () => {
        dispatch(clearFromCart(checkoutItem));
    };
    
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <div className='quantity'>
                <span className='arrow' onClick={handleDecrease}>{'<'}</span>
                <span className='value'>{quantity}</span>
                <span className='arrow' onClick={handleIncrease}>{'>'}</span>
            </div>
            <span className='price'>{quantity * price}</span>
            <span className='remove-button' onClick={handleRemove}>X</span>
        </div>
    );
}; 

export default CheckoutItem;