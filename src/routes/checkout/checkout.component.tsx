import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import { useAppSelector } from '../../store/hook';
import './checkout.styles.scss';

const Checkout = () => {
    const cartItems = useAppSelector(selectCartItems);
    const total = useAppSelector(selectCartTotal);
    
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