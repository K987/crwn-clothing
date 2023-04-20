import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import { useAppSelector } from '../../store/hook';
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles';

const Checkout = () => {
    const cartItems = useAppSelector(selectCartItems);
    const total = useAppSelector(selectCartTotal);
    
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock><span>Product</span></HeaderBlock>
                <HeaderBlock><span>Description</span></HeaderBlock>
                <HeaderBlock><span>Quantity</span></HeaderBlock>
                <HeaderBlock><span>Price</span></HeaderBlock>
                <HeaderBlock><span>Remove</span></HeaderBlock>
            </CheckoutHeader>
            {
                cartItems.map(item => 
                    <CheckoutItem 
                        key={item.id} 
                        checkoutItem={item} />)
            }
            <Total>Total: {total}</Total>
        </CheckoutContainer>
        
    );
};

export default Checkout;