import { useEffect } from "react";
import FilterBar from "../../components/FilterBar/FilterBar";
import TeachersList from "../../components/TeachersList/TeachersList";
import css from "./TeachersPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeachers } from "../../redux/teachers/operations";
import {
  selectTeachers,
  selectVisibleTeachers,
} from "../../redux/teachers/selectors";
import { changeVisibleTeachers } from "../../redux/teachers/teachersSlice";
import BtnLoadMore from "../../components/BtnLoadMore/BtnLoadMore";

const TeachersPage = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  const visibleTeachers = useSelector(selectVisibleTeachers);

  const handleLoadMore = () => {
    dispatch(changeVisibleTeachers(visibleTeachers + 5));
  };

  return (
    <section className={css.section}>
      <FilterBar />
      <TeachersList primary={"primary"} />
      {visibleTeachers < teachers.length && (
        <BtnLoadMore handleLoadMore={handleLoadMore} />
      )}
    </section>
  );
};

export default TeachersPage;
