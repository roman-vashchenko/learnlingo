import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchFavoriteTeachers } from "../../redux/teachers/operations";
import css from "./FavoritesPage.module.css";
import TeachersList from "../../components/TeachersList/TeachersList";

const FavoritesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteTeachers());
  }, [dispatch]);

  return (
    <div>
      <section className={css.section}>
        <TeachersList secondary={"secondary"} />
      </section>
    </div>
  );
};

export default FavoritesPage;
