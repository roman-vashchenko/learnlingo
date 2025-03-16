import { useState } from "react";
import clsx from "clsx";
import css from "./TeacherItem.module.css";
import CommentList from "../CommentList/CommentList";
import LanguageLevelList from "../LanguageLevelList/LanguageLevelList";
import BtnBookTrialLesson from "../BtnBookTrialLesson/BtnBookTrialLesson";
import ModalBookTrialLesson from "../ModalBookTrialLesson/ModalBookTrialLesson";
import { addAndRemoveFavoriteTeacher } from "../../redux/teachers/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedIn } from "../../redux/auth/selectors";

const TeacherItem = ({ teacher, favoriteTeachers }) => {
  const dispatch = useDispatch();
  const [isHidden, setIsHidden] = useState(true);
  const [modalIsOpen, setIsOpen] = useState(false);
  const isLoggedIn = useSelector(selectLoggedIn);

  const isFavorite = favoriteTeachers.some((t) => t.id === teacher.id);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <div className={css.card}>
      <div className={css.awatarWrapper}>
        <img
          src={teacher.avatar_url}
          alt={teacher.name}
          className={css.avatar}
          width={96}
          height={96}
        />
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
            <li className={css.statisticsListItem}>
              Lessons done: {teacher.lessons_done}
            </li>
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
              Rating: {teacher.rating}
            </li>
            <li className={css.statisticsListItem}>
              Price / 1 hour:{" "}
              <span style={{ color: "#38CD3E" }}>
                {teacher.price_per_hour}$
              </span>
            </li>
          </ul>
          <button
            type="button"
            className={css.btnFvorite}
            onClick={() => {
              if (isLoggedIn) {
                dispatch(addAndRemoveFavoriteTeacher(teacher));
              }
            }}
          >
            <svg
              width={26}
              height={26}
              className={clsx(css.icon, isFavorite && css.isFavorite)}
            >
              <use href="/img/icons.svg#icon-favorite-transparent-1"></use>
            </svg>
          </button>
        </div>
        <p className={css.name}>
          {teacher.name} {teacher.surname}
        </p>
        <ul className={css.descriptionList}>
          <li className={css.descriptionListItem}>
            <p>
              <span>Speaks:</span>{" "}
              <span className={css.languages}>
                {Object.keys(teacher.languages).join(", ").replace("_", " ")}
              </span>
            </p>
          </li>
          <li className={css.descriptionListItem}>
            <p>
              <span>Lesson Info:</span> {teacher.lesson_info}.
            </p>
          </li>
          <li className={css.descriptionListItem}>
            <p>
              <span>Conditions:</span> {teacher.conditions.join(" ")}
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
            <p className={css.descriptionText}>{teacher.experience}</p>
            <CommentList reviews={teacher.reviews} />
          </div>
        )}
        <LanguageLevelList levels={teacher.levels} />
        {!isHidden && <BtnBookTrialLesson openModal={handleOpenModal} />}
      </div>
      {modalIsOpen && (
        <ModalBookTrialLesson
          isOpen
          onClose={handleCloseModal}
          avatar={teacher.avatar_url}
          name={teacher.name}
          surname={teacher.surname}
        />
      )}
    </div>
  );
};

export default TeacherItem;
