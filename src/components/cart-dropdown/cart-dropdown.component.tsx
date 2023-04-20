import { useNavigate } from 'react-router-dom';
import { selectCartItems } from '../../store/cart/cart.selector';
import Button from '../button/button.component';
import { useAppSelector } from '../../store/hook';
import CartItem from '../cart-item/cart-item.component';
import { MouseEvent } from 'react';
import { CartDropdownContainer, CartItems } from './cart-dropdown.styles';

const CartDropdown = () => {
    const cartItems = useAppSelector(selectCartItems);

    const navigate = useNavigate();
    const clickHandler = (_: MouseEvent): void => navigate('checkout');

    return (
        <CartDropdownContainer>
            <CartItems>
                { cartItems.length ? 
                    cartItems.map(item => 
                        <CartItem key={item.id} cartItem={item} />
                    ) :
                    <span>Cart is empty</span>
                }
            </CartItems>
            <Button onClick={clickHandler}>CHECKOUT</Button>
        </CartDropdownContainer>
    );
};

export default CartDropdown;