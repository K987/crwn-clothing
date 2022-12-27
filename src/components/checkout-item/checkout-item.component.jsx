import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './checkout-item.styles.scss';

const CheckoutItem = ({checkoutItem}) => {
    const {addItemToCart, removeItemFromCart, clearItemFromCart} = useContext(CartContext);
    const {imageUrl, name, quantity, price} = checkoutItem;

    const handleDecrease = () => {
        removeItemFromCart(checkoutItem)
    };
    const handleIncrease = () => {
        addItemToCart(checkoutItem)
    };
    const handleRemove = () => {
        clearItemFromCart(checkoutItem)
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