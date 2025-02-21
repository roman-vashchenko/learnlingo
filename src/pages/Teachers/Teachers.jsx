import FilterBar from "../../components/FilterBar/FilterBar";
import TeachersList from "../../components/TeachersList/TeachersList";
import css from "./Teachers.module.css";

const Teachers = () => {
  return (
    <section className={css.section}>
      <FilterBar />
      <TeachersList />
    </section>
  );
};

export default Teachers;
