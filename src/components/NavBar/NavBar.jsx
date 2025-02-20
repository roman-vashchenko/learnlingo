import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./NavBar.module.css";

const NavBar = () => {
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
    </nav>
  );
};

export default NavBar;
