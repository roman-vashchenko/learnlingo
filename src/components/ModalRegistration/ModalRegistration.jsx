import { useEffect } from "react";
import ReactModal from "react-modal";
import css from "./ModalRegistration.module.css";

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

const ModalRegistration = ({ isOpen, onClose }) => {
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
        <p className={css.title}>Registration</p>
        <p className={css.text}>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </p>
        <form className={css.form}>
          <div className={css.wrapper}>
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
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
