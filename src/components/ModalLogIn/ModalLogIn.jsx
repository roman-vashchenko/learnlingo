import { useEffect, useState } from "react";
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
import { Box, CircularProgress } from "@mui/material";
import toast from "react-hot-toast";
import { fetchFavoriteTeachers } from "../../redux/teachers/operations";

ReactModal.setAppElement("#root");

const schema = yup
  .object({
    email: yup.string().max(50).required(),
    password: yup.string().min(7).required(),
  })
  .required();

const ModalLogIn = ({ isOpen, onClose }) => {
  const [isLoader, setLoader] = useState(false);
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
    setLoader(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;
      dispatch(logIn({ user }));
      onClose();
      dispatch(fetchFavoriteTeachers());
      setLoader(false);
    } catch (error) {
      if (error.message === "Firebase: Error (auth/invalid-credential).") {
        toast.error("Incorrect login or password.", {
          duration: 3000,
        });
      }
      setLoader(false);
    }
  };

  return (
    <div>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onClose}
        className={css.modal}
        overlayClassName={css.overlay}
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
          <button type="submit" className={css.btn} disabled={isLoader}>
            {isLoader ? (
              <div>
                <Box>
                  <CircularProgress size="19px" />
                </Box>
              </div>
            ) : (
              "Log In"
            )}
          </button>
        </form>
      </ReactModal>
    </div>
  );
};

export default ModalLogIn;
