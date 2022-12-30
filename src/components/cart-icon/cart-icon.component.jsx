import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';


const CartIcon = () => {
    const {toggleShowCart, itemsCount} = useContext(CartContext);

    const handleClick = (event) => toggleShowCart(); 

    return (
        <div className='cart-icon-container'>
            <ShoppingIcon className='shopping-icon' onClick={handleClick}/>
            <span className='item-count'>{itemsCount}</span>
        </div>
    );
};

export default CartIcon;