import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/cart.context';


const CartIcon = () => {
    const {showCart, toggleShowCart, cartItems} = useContext(CartContext);
    const [itemCount, setItemCount] = useState(0);

    useEffect(() => setItemCount(cartItems.reduce((acc, item) => acc + item.quantity, 0)), [cartItems]);

    const handleClick = (event) => toggleShowCart(!showCart); 

    return (
        <div className='cart-icon-container'>
            <ShoppingIcon className='shopping-icon' onClick={handleClick}/>
            <span className='item-count'>{itemCount}</span>
        </div>
    );
};

export default CartIcon;