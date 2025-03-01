import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

const UserBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  if (!user) {
    return <p>Loading...</p>; // або повернути іншу відповідь, якщо user ще не завантажений
  }

  return (
    <div>
      <p>Hello!{user.name}</p>
      <button
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
