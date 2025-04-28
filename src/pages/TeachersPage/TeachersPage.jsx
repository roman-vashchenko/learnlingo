import { useEffect } from "react";
import FilterBar from "../../components/FilterBar/FilterBar";
import TeachersList from "../../components/TeachersList/TeachersList";
import css from "./TeachersPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFavoriteTeachers,
  fetchTeachers,
} from "../../redux/teachers/operations";
import {
  selectFavoriteTeachers,
  selectLoading,
  selectTeachers,
  selectVisibleTeachers,
} from "../../redux/teachers/selectors";
import { changeVisibleTeachers } from "../../redux/teachers/teachersSlice";
import BtnLoadMore from "../../components/BtnLoadMore/BtnLoadMore";
import { Box, CircularProgress } from "@mui/material";
import { selectUser } from "../../redux/auth/selectors";

const TeachersPage = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);
  const visibleTeachers = useSelector(selectVisibleTeachers);
  const favoriteTeachers = useSelector(selectFavoriteTeachers);
  const isLoader = useSelector(selectLoading);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchTeachers());
    if (user && favoriteTeachers.length === 0) {
      dispatch(fetchFavoriteTeachers());
    }
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(changeVisibleTeachers(visibleTeachers + 5));
  };

  return (
    <section className={css.section}>
      <FilterBar />
      {isLoader ? (
        <Box sx={{ position: "absolute", left: "50%" }}>
          <CircularProgress size="70px" />
        </Box>
      ) : (
        <TeachersList primary={"primary"} />
      )}
      {teachers.length === 0 && !isLoader && (
        <p style={{ fontSize: "30px" }}>No data found</p>
      )}

      {visibleTeachers < teachers.length && !isLoader && (
        <BtnLoadMore handleLoadMore={handleLoadMore} />
      )}
    </section>
  );
};

export default TeachersPage;
