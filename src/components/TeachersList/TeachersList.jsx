import { useDispatch, useSelector } from "react-redux";
import TeacherItem from "../TeacherItem/TeacherItem";
import BtnLoadMore from "../../components/BtnLoadMore/BtnLoadMore";
import css from "./TeachersList.module.css";
import {
  selectFavoriteTeachers,
  selectTeachers,
  selectVisibleTeachers,
  // selectTotalTeachers,
} from "../../redux/teachers/selectors";
import { changeVisibleTeachers } from "../../redux/teachers/teachersSlice";

const TeachersList = ({ primary, secondary }) => {
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);
  const favoriteTeachers = useSelector(selectFavoriteTeachers);
  const visibleTeachers = useSelector(selectVisibleTeachers);

  const handleLoadMore = () => {
    dispatch(changeVisibleTeachers(visibleTeachers + 5));
  };

  return (
    <div>
      {primary === "primary" && (
        <ul className={css.list}>
          {teachers.length > 0 &&
            teachers.slice(0, visibleTeachers).map((teacher) => (
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
      {/* {teachers.length > 0 && teachers.length < totalTeachers && (
        <BtnLoadMore hendleLoadData={hendleLoadData} />
      )} */}
      {visibleTeachers < teachers.length && (
        <BtnLoadMore handleLoadMore={handleLoadMore} />
      )}
    </div>
  );
};

export default TeachersList;
