import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import UserBar from "../UserBar/UserBar";
import css from "./AppBar.module.css";
import { selectLoggedIn } from "../../redux/auth/selectors";

const AppBar = ({ openModal }) => {
  const isLoggedIn = useSelector(selectLoggedIn);

  return (
    <header className={css.header}>
      <Logo />
      <NavBar />
      {isLoggedIn ? <UserBar /> : <AuthNav openModal={openModal} />}
    </header>
  );
};

export default AppBar;
