import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { selectCartItemsCount } from '../../store/cart/cart.selector';
import { toggleShowCart } from '../../store/cart/cart.slice';
import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { CartIconContainer, ItemCount } from './cart-icon.styles';



const CartIcon = () => {
    const itemsCount = useAppSelector(selectCartItemsCount);
    const dispatch = useAppDispatch();

    const handleClick = (_: ChangeEvent) => dispatch(toggleShowCart()); 

    return (
        <CartIconContainer>
            <ShoppingIcon onClick={handleClick}/>
            <ItemCount>{itemsCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;