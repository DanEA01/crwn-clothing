import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import CrwnLogo from "../../assets/crown.svg?react";
//css
import "./navigation-bar.styles.scss";

const NavBar = () => {
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
          <Link className="nav-link" to="/signIn">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
