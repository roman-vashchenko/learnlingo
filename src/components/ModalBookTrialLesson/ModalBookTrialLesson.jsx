import { useEffect } from "react";
import ReactModal from "react-modal";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import css from "./ModalBookTrialLesson.module.css";

ReactModal.setAppElement("#root");

const customStyles = {
  overlay: {
    position: "fixed",
    inset: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflowY: "auto",
    padding: "150px 0",
  },
  content: {
    position: "relative",
    inset: "0px",
    width: "600px",
    padding: "64px",
    borderRadius: "30px",
    backgroundColor: "#FFF",
    margin: "auto",
  },
};

const ModalBookTrialLesson = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.body.removeAttribute("style");
    }

    return () => {
      document.body.style.overflow = "";
      document.body.removeAttribute("style");
    };
  }, [isOpen]);
  return (
    <div>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        bodyOpenClassName={null}
      >
        <svg width={32} height={32} className={css.icon} onClick={onClose}>
          <use href="/img/icons.svg#icon-close"></use>
        </svg>
        <p className={css.title}>Book trial lesson</p>
        <p className={css.text}>
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </p>
        <div className={css.teacherCard}>
          <div className={css.avatarTeacher}></div>
          <div className={css.wrapper}>
            <span>Your teacher</span>
            <p className={css.nameTeacher}>Jane Smith</p>
          </div>
        </div>
        <form className={css.form}>
          <FormControl>
            <p className={css.questionText}>
              What is your main reason for learning English?
            </p>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="CareerAndBusiness"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="CareerAndBusiness"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "#9fb7ce",
                      },
                    }}
                  />
                }
                label="Career and business"
              />
              <FormControlLabel
                value="LessonForKids"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "#9fb7ce",
                      },
                    }}
                  />
                }
                label="Lesson for kids"
              />
              <FormControlLabel
                value="LivingAbroad"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "#9fb7ce",
                      },
                    }}
                  />
                }
                label="Living abroad"
              />
              <FormControlLabel
                value="ExamsAndCoursework"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "#9fb7ce",
                      },
                    }}
                  />
                }
                label="Exams and coursework"
              />
              <FormControlLabel
                value="CultureTravelOrHobby"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "#9fb7ce",
                      },
                    }}
                  />
                }
                label="Culture, travel or hobby"
              />
            </RadioGroup>
          </FormControl>
          <div className={css.wrap}>
            <input type="text" name="name" placeholder="Full Name" />
            <input type="text" name="email" placeholder="Email" />
            <input type="phone" name="phoneNumber" placeholder="Phone number" />
          </div>
          <button type="submit" className={css.btn}>
            Sign Up
          </button>
        </form>
      </ReactModal>
    </div>
  );
};

export default ModalBookTrialLesson;
