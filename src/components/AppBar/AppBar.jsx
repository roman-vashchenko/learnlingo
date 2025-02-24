import AuthNav from "../AuthNav/AuthNav";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import css from "./AppBar.module.css";

const AppBar = ({ openModal }) => {
  return (
    <header className={css.header}>
      <Logo />
      <NavBar />
      <AuthNav openModal={openModal} />
    </header>
  );
};

export default AppBar;
