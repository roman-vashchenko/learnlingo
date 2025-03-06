import { useSelector } from "react-redux";
import TeacherItem from "../TeacherItem/TeacherItem";
import css from "./TeachersList.module.css";
import {
  selectFavoriteTeachers,
  selectTeachers,
} from "../../redux/teachers/selectors";

const TeachersList = ({ primary, secondary }) => {
  const teachers = useSelector(selectTeachers);
  const favoriteTeachers = useSelector(selectFavoriteTeachers);
  return (
    <div>
      {primary === "primary" && (
        <ul className={css.list}>
          {teachers.length > 0 &&
            teachers.map((teacher) => (
              <li key={teacher.id}>
                <TeacherItem teacher={teacher} />
              </li>
            ))}
        </ul>
      )}
      {secondary === "secondary" && (
        <ul className={css.list} style={{ marginBottom: "0" }}>
          {favoriteTeachers.length > 0 &&
            favoriteTeachers.map((teacher) => (
              <li key={teacher.id}>
                <TeacherItem teacher={teacher} />
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default TeachersList;
