import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import CrwnLogo from "../../assets/crown.svg?react";
//css
import "./navigation-bar.styles.scss";

import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import ShopIcon from "../shop-icon/shop-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const NavBar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const logOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <div className="navigation-bar">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/contact">
            CONTACT
          </Link>
          {currentUser === null ? (
            <Link className="nav-link" to="/signIn">
              SIGN IN
            </Link>
          ) : (
            <Link className="nav-link" onClick={logOutHandler}>
              LOG OUT
            </Link>
          )}
          <ShopIcon />
        </div>
        <CartDropdown />
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
