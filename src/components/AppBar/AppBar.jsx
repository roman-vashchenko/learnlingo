import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import UserBar from "../UserBar/UserBar";
import css from "./AppBar.module.css";
import { selectLoggedIn, selectUser } from "../../redux/auth/selectors";
import { useMediaQuery } from "react-responsive";
import BtnMenu from "../BtnMenu/BtnMenu";

const AppBar = ({ openModal, toggleMenu }) => {
  const isLoggedIn = useSelector(selectLoggedIn);
  const user = useSelector(selectUser);
  const isTabletOrLarger = useMediaQuery({ minWidth: 768 });

  return (
    <header className={css.header}>
      <Logo />
      {isTabletOrLarger && <NavBar />}
      {isTabletOrLarger ? (
        isLoggedIn && user ? (
          <UserBar />
        ) : (
          <AuthNav openModal={openModal} />
        )
      ) : (
        <BtnMenu toggleMenu={toggleMenu} />
      )}
    </header>
  );
};

export default AppBar;
