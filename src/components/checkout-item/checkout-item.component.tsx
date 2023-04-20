import { addToCart, clearFromCart, removeFromCart, CartItemElement } from '../../store/cart/cart.slice';
import { useAppDispatch } from '../../store/hook';
import { Arrow, BaseSpan, CheckoutItemContainer, ImageContainer, Quantity, RemoveButton, Value } from './checkout-item.styles';


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
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name} />
            </ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <Quantity>
                <Arrow onClick={handleDecrease}>{'<'}</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={handleIncrease}>{'>'}</Arrow>
            </Quantity>
            <BaseSpan>{quantity * price}</BaseSpan>
            <RemoveButton onClick={handleRemove}>X</RemoveButton>
        </CheckoutItemContainer>
    );
}; 

export default CheckoutItem;