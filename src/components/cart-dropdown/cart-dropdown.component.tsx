import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCartItems } from '../../store/cart/cart.selector';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';
import React, { ChangeEvent } from 'react';

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);

    const navigate = useNavigate();
    const clickHandler = (event: ChangeEvent): void => navigate('checkout');

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => 
                    <CartItem key={item.id} cartItem={item} />)
                }
            </div>
            <Button buttonOptions={{onClick: clickHandler}}>CHECKOUT</Button>
        </div>
    );
};

export default CartDropdown;