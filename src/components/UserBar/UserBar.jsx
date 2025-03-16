import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import css from "./UserBar.module.css";

const UserBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <p className={css.text}>
        Hello! <span>{user.name}</span>
      </p>
      <button
        className={css.btn}
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        LogOut
      </button>
    </div>
  );
};

export default UserBar;
