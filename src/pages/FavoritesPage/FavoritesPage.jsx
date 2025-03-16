import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavoriteTeachers } from "../../redux/teachers/operations";
import css from "./FavoritesPage.module.css";
import TeachersList from "../../components/TeachersList/TeachersList";
import {
  selectFavoriteTeachers,
  selectLoading,
} from "../../redux/teachers/selectors";
import { Box, CircularProgress } from "@mui/material";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favoriteTeachers = useSelector(selectFavoriteTeachers);
  const isLoader = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchFavoriteTeachers());
  }, [dispatch]);

  return (
    <div>
      <section className={css.section}>
        {isLoader ? (
          <Box sx={{ display: "flex", position: "absolute", left: "50%" }}>
            <CircularProgress size="70px" />
          </Box>
        ) : (
          <TeachersList secondary={"secondary"} />
        )}
        {favoriteTeachers.length === 0 && !isLoader && (
          <p style={{ fontSize: "30px" }}>
            The list of favorite teachers is empty
          </p>
        )}
      </section>
    </div>
  );
};

export default FavoritesPage;
