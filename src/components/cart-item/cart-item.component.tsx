import { memo } from 'react';
import { CartItemElement } from '../../store/cart/cart.slice';
import { CartItemContainer, ItemDeatils } from './cart-item.styles';

// memo: don't rerendeer unless props changed
const CartItem = memo(({cartItem}: {cartItem: CartItemElement}) => {

    const { name, quantity, imageUrl, price } = cartItem;

    return (
        <CartItemContainer>
            <img src={imageUrl} alt={name} />
            <ItemDeatils>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </ItemDeatils>
        </CartItemContainer>
    );
});

export default CartItem;