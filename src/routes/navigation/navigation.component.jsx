import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss"
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

const Navigation = () => {

  const {showCart} = useContext(CartContext);
  const currentUser = useSelector(selectCurrentUser);
  
    return (
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to="/">
                <CrwnLogo className="logo"/>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to="/shop">SHOP</Link>
                {
                  currentUser ?
                    <Link className="nav-link" onClick={signOutUser}>SIGN OUT</Link>
                    :
                    <Link className="nav-link" to="/auth">SIGN IN</Link>
                }
              <CartIcon />
            </div>
            {showCart &&
              <CartDropdown />
            }
        </div>
        <Outlet />
      </Fragment>
    );
  }

  export default Navigation;