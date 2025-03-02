import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchFavoriteTeachers } from "../../redux/teachers/operations";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFavoriteTeachers());
  });

  return <div>FavoritesPage</div>;
};

export default FavoritesPage;
