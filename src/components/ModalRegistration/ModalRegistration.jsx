import { useEffect } from "react";
import ReactModal from "react-modal";

ReactModal.defaultStyles.overlay.backgroundColor = "rgba(0, 0, 0, 0.7)";
ReactModal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "566px",
    padding: "64px",
  },
};

const ModalRegistration = ({ isOpen, onClose }) => {
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
        <p>Modal Registration</p>
      </ReactModal>
    </div>
  );
};

export default ModalRegistration;
