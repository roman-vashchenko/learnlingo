import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import NavBar from "../NavBar/NavBar";
import UserBar from "../UserBar/UserBar";
import css from "./MobileMenu.module.css";
import { selectLoggedIn, selectUser } from "../../redux/auth/selectors";

const MobileMenu = ({ openModal }) => {
  const isLoggedIn = useSelector(selectLoggedIn);
  const user = useSelector(selectUser);
  return (
    <div className={css.menu}>
      {isLoggedIn && user ? <UserBar /> : <AuthNav openModal={openModal} />}
      <NavBar />
    </div>
  );
};

export default MobileMenu;
