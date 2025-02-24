import { useState } from "react";
import css from "./TeacherItem.module.css";
import CommentList from "../CommentList/CommentList";
import LanguageLevelList from "../LanguageLevelList/LanguageLevelList";
import BtnBookTrialLesson from "../BtnBookTrialLesson/BtnBookTrialLesson";

const TeacherItem = ({ openModal }) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className={css.card}>
      <div className={css.awatarWrapper}>
        <div className={css.avatar}></div>
      </div>
      <div className={css.content}>
        <div className={css.wrapper}>
          <span className={css.label}>Languages</span>

          <ul className={css.statisticsList}>
            <li
              className={css.statisticsListItem}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              {" "}
              <svg width={16} height={16} className={css.icon}>
                <use href="/img/icons.svg#icon-book"></use>
              </svg>
              Lessons online
            </li>
            <li className={css.statisticsListItem}>Lessons done: 1098</li>
            <li
              className={css.statisticsListItem}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <svg width={16} height={16}>
                <use href="/img/icons.svg#icon-star"></use>
              </svg>
              Rating: 4.8
            </li>
            <li className={css.statisticsListItem}>
              Price / 1 hour: <span style={{ color: "#38CD3E" }}>30$</span>
            </li>
          </ul>
          <svg width={26} height={26} className={css.icon}>
            <use href="/img/icons.svg#icon-favorite-transparent-1"></use>
          </svg>
        </div>
        <p className={css.name}>Jane Smith</p>
        <ul className={css.descriptionList}>
          <li className={css.descriptionListItem}>
            <p>
              <span>Speaks:</span>{" "}
              <span className={css.languages}>German, French</span>
            </p>
          </li>
          <li className={css.descriptionListItem}>
            <p>
              <span>Lesson Info:</span> Lessons are structured to cover grammar,
              vocabulary, and practical usage of the language.
            </p>
          </li>
          <li className={css.descriptionListItem}>
            <p>
              <span>Conditions:</span> Welcomes both adult learners and
              teenagers (13 years and above).Provides personalized study plans
            </p>
          </li>
        </ul>
        {isHidden && (
          <button
            type="button"
            className={css.btnReadMore}
            onClick={() => {
              setIsHidden(!isHidden);
            }}
          >
            Read more
          </button>
        )}
        {!isHidden && (
          <div className={css.hiddenСontent}>
            <p className={css.descriptionText}>
              Jane is an experienced and dedicated language teacher specializing
              in German and French. She holds a Bachelor&apos;s degree in German
              Studies and a Master&apos;s degree in French Literature. Her
              passion for languages and teaching has driven her to become a
              highly proficient and knowledgeable instructor. With over 10 years
              of teaching experience, Jane has helped numerous students of
              various backgrounds and proficiency levels achieve their language
              learning goals. She is skilled at adapting her teaching methods to
              suit the needs and learning styles of her students, ensuring that
              they feel supported and motivated throughout their language
              journey.
            </p>
            <CommentList />
          </div>
        )}
        <LanguageLevelList />
        {!isHidden && <BtnBookTrialLesson openModal={openModal} />}
      </div>
    </div>
  );
};

export default TeacherItem;
