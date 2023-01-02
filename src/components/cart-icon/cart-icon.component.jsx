import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItemsCount } from '../../store/cart/cart.selector';
import { toggleShowCart } from '../../store/cart/cart.slice';


const CartIcon = () => {
    const itemsCount = useSelector(selectCartItemsCount);
    const dispatch = useDispatch();

    const handleClick = (event) => dispatch(toggleShowCart()); 

    return (
        <div className='cart-icon-container'>
            <ShoppingIcon className='shopping-icon' onClick={handleClick}/>
            <span className='item-count'>{itemsCount}</span>
        </div>
    );
};

export default CartIcon;