import { useContext, useEffect, useState } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CartContext } from '../../context/cart.context';
import './checkout.styles.scss';

const Checkout = () => {
    const {cartItems} = useContext(CartContext);
    const [total, setTotal] = useState(0);

    useEffect(
        () => setTotal(cartItems.reduce((acc, item) => acc + item.quantity  * item.price, 0)),
        [cartItems]
    );
    
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'><span>Product</span></div>
                <div className='header-block'><span>Description</span></div>
                <div className='header-block'><span>Quantity</span></div>
                <div className='header-block'><span>Price</span></div>
                <div className='header-block'><span>Remove</span></div>
            </div>
            {
                cartItems.map(item => 
                    <CheckoutItem 
                        key={item.id} 
                        checkoutItem={item} />)
            }
            <span className='total'>Total: {total}</span>
        </div>
        
    );
};

export default Checkout;