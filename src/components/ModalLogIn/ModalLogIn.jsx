import { useEffect } from "react";
import ReactModal from "react-modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import css from "./ModalLogIn.module.css";
import { addBlockOnBody } from "../../helpers/addBlockOnBody";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

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
    margin: "auto",
  },
};

const schema = yup
  .object({
    email: yup.string().max(50).required(),
    password: yup.string().min(7).required(),
  })
  .required();

const ModalLogIn = ({ isOpen, onClose }) => {
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
  const onSubmit = async (data) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;
      dispatch(logIn({ user }));
      onClose();
    } catch (error) {
      console.log(error);
    }
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
        <p className={css.title}>Log In</p>
        <p className={css.text}>
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </p>
        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={css.wrapper}>
            <input
              type="text"
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
            Log In
          </button>
        </form>
      </ReactModal>
    </div>
  );
};

export default ModalLogIn;
