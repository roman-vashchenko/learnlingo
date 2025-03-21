import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectAuth, selectLoggedIn } from "../../redux/auth/selectors";

const PrivateRoute = ({ component: Component, redirectTo = "/teachers" }) => {
  const isLoggedIn = useSelector(selectLoggedIn);
  const { isRefreshing } = useSelector(selectAuth);

  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
