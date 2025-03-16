import { useSelector } from "react-redux";
import TeacherItem from "../TeacherItem/TeacherItem";
import BtnLoadMore from "../../components/BtnLoadMore/BtnLoadMore";
import css from "./TeachersList.module.css";
import {
  selectFavoriteTeachers,
  selectTeachers,
  selectTotalTeachers,
} from "../../redux/teachers/selectors";

const TeachersList = ({ primary, secondary, hendleLoadData }) => {
  const teachers = useSelector(selectTeachers);
  const totalTeachers = useSelector(selectTotalTeachers);
  const favoriteTeachers = useSelector(selectFavoriteTeachers);

  return (
    <div>
      {primary === "primary" && (
        <ul className={css.list}>
          {teachers.length > 0 &&
            teachers.map((teacher) => (
              <li key={teacher.id}>
                <TeacherItem
                  teacher={teacher}
                  favoriteTeachers={favoriteTeachers}
                />
              </li>
            ))}
        </ul>
      )}
      {secondary === "secondary" && (
        <ul className={css.list} style={{ marginBottom: "0" }}>
          {favoriteTeachers.length > 0 &&
            favoriteTeachers.map((teacher) => (
              <li key={teacher.id}>
                <TeacherItem
                  teacher={teacher}
                  favoriteTeachers={favoriteTeachers}
                />
              </li>
            ))}
        </ul>
      )}
      {teachers.length > 0 && teachers.length < totalTeachers && (
        <BtnLoadMore hendleLoadData={hendleLoadData} />
      )}
    </div>
  );
};

export default TeachersList;
