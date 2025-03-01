import { useEffect } from "react";
import ReactModal from "react-modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import css from "./ModalRegistration.module.css";
import { addBlockOnBody } from "../../helpers/addBlockOnBody";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/auth/operations";

ReactModal.defaultStyles.overlay.backgroundColor = "rgba(0, 0, 0, 0.7)";
ReactModal.setAppElement("#root");

const customStyles = {
  overlay: {
    position: "fixed",
    inset: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflowY: "auto",
  },
  content: {
    position: "relative",
    inset: "0px",
    width: "566px",
    padding: "64px",
    borderRadius: "30px",
    backgroundColor: "#FFF",
  },
};

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().min(7).required(),
  })
  .required();

const ModalRegistration = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
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
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    dispatch(registerUser(data));
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
        <p className={css.title}>Registration</p>
        <p className={css.text}>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </p>
        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={css.wrapper}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              {...register("name")}
            />
            <p style={{ color: "red" }}>{errors.name?.message}</p>
            <input
              type="email"
              name="email"
              placeholder="Email"
              {...register("email")}
            />
            <p style={{ color: "red" }}>{errors.email?.message}</p>
            <input
              type="password"
              name="password"
              placeholder="Password"
              {...register("password")}
            />
            <p style={{ color: "red" }}>{errors.password?.message}</p>
          </div>
          <button type="submit" className={css.btn}>
            Sign Up
          </button>
        </form>
      </ReactModal>
    </div>
  );
};

export default ModalRegistration;
