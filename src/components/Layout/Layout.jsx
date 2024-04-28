import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "../../App.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUserData } from "../../redux/auth/selectors";
import { apiLogOut } from "../../redux/auth/operations";

import { useDispatch } from "react-redux";
const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userDate = useSelector(selectUserData);

  const onLogout = () => {
    dispatch(apiLogOut());
  };

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

              <div>
                <span>Hi , {userDate.name}</span>
                <button onClick={onLogout} type='button'>
                  Logout
                </button>
              </div>
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
