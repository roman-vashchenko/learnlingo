import { useSelector } from "react-redux";
import TeacherItem from "../TeacherItem/TeacherItem";
import css from "./TeachersList.module.css";
import { selectTeachers } from "../../redux/teachers/selectors";

const TeachersList = () => {
  const teachers = useSelector(selectTeachers);
  return (
    <div>
      <ul className={css.list}>
        {teachers.length > 0 &&
          teachers.map((teacher, idx) => (
            <li key={idx}>
              <TeacherItem teacher={teacher} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TeachersList;
