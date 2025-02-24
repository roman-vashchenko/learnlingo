import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import ModalLogIn from "../ModalLogIn/ModalLogIn";
import ModalRegistration from "../ModalRegistration/ModalRegistration";

const Layout = () => {
  const [modalType, setModalType] = useState(null);
  const handleCloseModal = () => {
    setModalType(null);
  };

  const handleOpenModal = (type) => {
    setModalType(type);
  };
  return (
    <div>
      <AppBar openModal={handleOpenModal} />
      {modalType === "login" && (
        <ModalLogIn isOpen onClose={handleCloseModal} />
      )}
      {modalType === "register" && (
        <ModalRegistration isOpen onClose={handleCloseModal} />
      )}
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
