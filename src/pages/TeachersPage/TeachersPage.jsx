import { useEffect } from "react";
// import BtnLoadMore from "../../components/BtnLoadMore/BtnLoadMore";
import FilterBar from "../../components/FilterBar/FilterBar";
import TeachersList from "../../components/TeachersList/TeachersList";
import css from "./TeachersPage.module.css";
import { useDispatch } from "react-redux";
import { fetchTeachers } from "../../redux/teachers/operations";

const TeachersPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  return (
    <section className={css.section}>
      <FilterBar />
      <TeachersList primary={"primary"} />
    </section>
  );
};

export default TeachersPage;
