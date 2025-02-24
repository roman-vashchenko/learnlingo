import css from "./BtnBookTrialLesson.module.css";

const BtnBookTrialLesson = ({ openModal }) => {
  return (
    <div>
      <button type="button" className={css.btn} onClick={openModal}>
        Book trial lesson
      </button>
    </div>
  );
};

export default BtnBookTrialLesson;
