import { useEffect } from "react";
// import BtnLoadMore from "../../components/BtnLoadMore/BtnLoadMore";
import FilterBar from "../../components/FilterBar/FilterBar";
import TeachersList from "../../components/TeachersList/TeachersList";
import css from "./TeachersPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeachers } from "../../redux/teachers/operations";
import { selectFilter } from "../../redux/filter/selectors";

const TeachersPage = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);
  console.log(filterValue);

  useEffect(() => {
    dispatch(fetchTeachers(filterValue));
  }, [dispatch, filterValue]);

  return (
    <section className={css.section}>
      <FilterBar />
      <TeachersList primary={"primary"} />
      {/* <BtnLoadMore /> */}
    </section>
  );
};

export default TeachersPage;
