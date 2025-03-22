import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import css from "./UserBar.module.css";
import { resetFavorites } from "../../redux/teachers/teachersSlice";

const UserBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.content}>
      <p className={css.text}>
        Hello! <span>{user.name}</span>
      </p>
      <button
        className={css.btn}
        type="button"
        onClick={() => {
          dispatch(logOut());
          dispatch(resetFavorites());
        }}
      >
        LogOut
      </button>
    </div>
  );
};

export default UserBar;
