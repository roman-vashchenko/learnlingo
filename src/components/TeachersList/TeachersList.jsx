import TeacherItem from "../TeacherItem/TeacherItem";
import css from "./TeachersList.module.css";

const TeachersList = ({ openModal }) => {
  return (
    <div>
      <ul className={css.list}>
        <li>
          <TeacherItem openModal={openModal} />
        </li>
      </ul>
    </div>
  );
};

export default TeachersList;
