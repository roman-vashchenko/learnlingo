import { useEffect } from "react";
import ReactModal from "react-modal";
import css from "./ModalLogIn.module.css";

ReactModal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "566px",
    height: "506px",
    padding: "64px",
    borderRadius: "30px",
    backgroundColor: "#FFF",
  },
};

const ModalLogIn = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  return (
    <div>
      <ReactModal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
        <p className={css.title}>Log In</p>
        <p className={css.text}>
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </p>
        <form className={css.form}>
          <div className={css.wrapper}>
            <input type="text" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
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
