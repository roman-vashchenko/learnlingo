import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import css from "./ModalRegistration.module.css";
import { addBlockOnBody } from "../../helpers/addBlockOnBody";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/auth/operations";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { Box, CircularProgress } from "@mui/material";
import toast from "react-hot-toast";

ReactModal.setAppElement("#root");

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().min(7).required(),
  })
  .required();

const ModalRegistration = ({ isOpen, onClose }) => {
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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;

      dispatch(registerUser({ name: data.name, user }));
      onClose();
      setLoader(false);
    } catch (error) {
      if (error.message === "Firebase: Error (auth/email-already-in-use).") {
        toast.error("User with this email already exists.", {
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
          <button type="submit" className={css.btn} disabled={isLoader}>
            {isLoader ? (
              <div>
                <Box>
                  <CircularProgress size="19px" />
                </Box>
              </div>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
      </ReactModal>
    </div>
  );
};

export default ModalRegistration;
