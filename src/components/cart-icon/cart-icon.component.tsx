import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { selectCartItemsCount } from '../../store/cart/cart.selector';
import { toggleShowCart } from '../../store/cart/cart.slice';
import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hook';


const CartIcon = () => {
    const itemsCount = useAppSelector(selectCartItemsCount);
    const dispatch = useAppDispatch();

    const handleClick = (_: ChangeEvent) => dispatch(toggleShowCart()); 

    return (
        <div className='cart-icon-container'>
            <ShoppingIcon className='shopping-icon' onClick={handleClick}/>
            <span className='item-count'>{itemsCount}</span>
        </div>
    );
};

export default CartIcon;