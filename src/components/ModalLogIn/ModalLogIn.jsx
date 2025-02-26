import { useEffect } from "react";
import ReactModal from "react-modal";
import css from "./ModalLogIn.module.css";

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

const ModalLogIn = ({ isOpen, onClose }) => {
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
