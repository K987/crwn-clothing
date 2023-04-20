import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectShowCart } from "../../store/cart/cart.selector";
import { useAppSelector } from "../../store/hook";
import { LogoContainer, NavLink, NavLinkContainer, NavigationContainer } from "./navigation.styles";

const Navigation = () => {

  const showCart = useAppSelector(selectShowCart);
  const currentUser = useAppSelector(selectCurrentUser);
  
    return (
      <Fragment>
        <NavigationContainer>
            <LogoContainer to="/">
                <CrwnLogo className="logo"/>
            </LogoContainer>
            <NavLinkContainer>
                <NavLink to="/shop">SHOP</NavLink>
                {
                  currentUser ?
                    <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                    :
                    <NavLink to="/auth">SIGN IN</NavLink>
                }
              <CartIcon />
            </NavLinkContainer>
            {showCart &&
              <CartDropdown />
            }
        </NavigationContainer>
        <Outlet />
      </Fragment>
    );
  }

  export default Navigation;