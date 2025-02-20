import AuthNav from "../AuthNav/AuthNav";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import css from "./AppBar.module.css";

const AppBar = () => {
  return (
    <header className={css.header}>
      <Logo />
      <NavBar />
      <AuthNav />
    </header>
  );
};

export default AppBar;
