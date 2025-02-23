import FilterBar from "../../components/FilterBar/FilterBar";
import TeachersList from "../../components/TeachersList/TeachersList";
import css from "./TeachersPage.module.css";

const TeachersPage = () => {
  return (
    <section className={css.section}>
      <FilterBar />
      <TeachersList />
    </section>
  );
};

export default TeachersPage;
