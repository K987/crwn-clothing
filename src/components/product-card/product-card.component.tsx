import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { addToCart } from '../../store/cart/cart.slice';
import { MouseEvent } from 'react';
import { useAppDispatch } from '../../store/hook';
import { CategoryItem } from '../../store/categories/categories.slice';
import { Footer, Name, Price, ProductCardContainer } from './product-card.styles';


export const ProductCard = ({product} : {product: CategoryItem} ) => {
    const {name, price, imageUrl} = product;
    const dispatch = useAppDispatch();

    const handleClick = (event: MouseEvent) => {
        dispatch(addToCart(product));
    }
    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={name}/>
            <Footer>
                <Name>{name}</Name>
                <Price className='price'>{price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={handleClick}>Add to cart</Button>
        </ProductCardContainer>
    );
}

export default ProductCard;