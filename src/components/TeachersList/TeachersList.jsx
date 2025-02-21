import { Link } from "react-router-dom";
import css from "./TeachersList.module.css";

const TeachersList = () => {
  return (
    <div>
      <ul>
        <li>
          <span>Languages</span>
          <ul>
            <li>Lessons online</li>
            <li>Lessons done: 1098</li>
            <li>Rating: 4.8</li>
            <li>Price / 1 hour: 30$</li>
          </ul>
          <svg width={26} height={26} className={css.icon}>
            <use href="/public/img/icons.svg#icon-favorite-transparent-1"></use>
          </svg>
          <p>Jane Smith</p>
          <p>Speaks: German, French</p>
          <p>
            Lesson Info: Lessons are structured to cover grammar, vocabulary,
            and practical usage of the language.
          </p>
          <p>
            Conditions: Welcomes both adult learners and teenagers (13 years and
            above).Provides personalized study plans
          </p>
          <Link>Read more</Link>
          <ul>
            <li>#A1 Beginner</li>
            <li>#A2 Elementary</li>
            <li>#B1 Intermediate</li>
            <li>#B2 Upper-Intermediate</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default TeachersList;
