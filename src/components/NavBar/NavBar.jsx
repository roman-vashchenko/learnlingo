import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./NavBar.module.css";
import { selectLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

const NavBar = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <nav className={css.navigation}>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={buildLinkClass} to="/teachers">
        Teachers
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildLinkClass} to="/favorites">
          Favorites
        </NavLink>
      )}
    </nav>
  );
};

export default NavBar;
