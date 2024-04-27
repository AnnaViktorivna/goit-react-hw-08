import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "../../App.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
const Layout = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <header>
        <nav className={css.nav}>
          <NavLink to='/' className={buildLinkClass}>
            Home
          </NavLink>
          {isLoggedIn ? (
            <>
              <NavLink to='/contacts' className={buildLinkClass}>
                Contacts
              </NavLink>
            </>
          ) : (
            <>
              {" "}
              <NavLink to='/login' className={buildLinkClass}>
                Login
              </NavLink>
              <NavLink to='/register' className={buildLinkClass}>
                Register
              </NavLink>
            </>
          )}
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
