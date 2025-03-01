import { useEffect } from "react";
import ReactModal from "react-modal";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import css from "./ModalBookTrialLesson.module.css";
import { addBlockOnBody } from "../../helpers/addBlockOnBody";

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

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().required(),
    phoneNumber: yup.number().required(),
  })
  .required();

const ModalBookTrialLesson = ({ isOpen, onClose, name, surname, avatar }) => {
  useEffect(() => {
    addBlockOnBody(isOpen);
    return () => {
      document.body.style.overflow = "";
      document.body.removeAttribute("style");
    };
  }, [isOpen]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = () => {
    onClose();
  };

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
          <img
            src={avatar}
            alt={name}
            className={css.avatarTeacher}
            width={44}
            height={44}
          />
          <div className={css.wrapper}>
            <span>Your teacher</span>
            <p className={css.nameTeacher}>
              {name} {surname}
            </p>
          </div>
        </div>
        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <p className={css.questionText}>
              What is your main reason for learning English?
            </p>
            <Controller
              name="answer"
              control={control}
              defaultValue="Career and business"
              render={({ field }) => (
                <RadioGroup {...field}>
                  <FormControlLabel
                    value="Career and business"
                    control={
                      <Radio sx={{ "&.Mui-checked": { color: "#9fb7ce" } }} />
                    }
                    label="Career and business"
                  />
                  <FormControlLabel
                    value="Lesson for kids"
                    control={
                      <Radio sx={{ "&.Mui-checked": { color: "#9fb7ce" } }} />
                    }
                    label="Lesson for kids"
                  />
                  <FormControlLabel
                    value="Living abroad"
                    control={
                      <Radio sx={{ "&.Mui-checked": { color: "#9fb7ce" } }} />
                    }
                    label="Living abroad"
                  />
                  <FormControlLabel
                    value="Exams and coursework"
                    control={
                      <Radio sx={{ "&.Mui-checked": { color: "#9fb7ce" } }} />
                    }
                    label="Exams and coursework"
                  />
                  <FormControlLabel
                    value="Culture, travel or hobby"
                    control={
                      <Radio sx={{ "&.Mui-checked": { color: "#9fb7ce" } }} />
                    }
                    label="Culture, travel or hobby"
                  />
                </RadioGroup>
              )}
            />
          </FormControl>
          <div className={css.wrap}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              {...register("name")}
            />
            <p style={{ color: "red" }}>{errors.name?.message}</p>
            <input
              type="text"
              name="email"
              placeholder="Email"
              {...register("email")}
            />
            <p style={{ color: "red" }}>{errors.email?.message}</p>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone number"
              {...register("phoneNumber")}
            />
            <p style={{ color: "red" }}>{errors.phoneNumber?.message}</p>
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
