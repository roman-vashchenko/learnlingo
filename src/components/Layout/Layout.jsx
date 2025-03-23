import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import ModalLogIn from "../ModalLogIn/ModalLogIn";
import ModalRegistration from "../ModalRegistration/ModalRegistration";
import { Toaster } from "react-hot-toast";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useMediaQuery } from "react-responsive";

const Layout = () => {
  const [modalType, setModalType] = useState(null);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const isTabletOrLarger = useMediaQuery({ maxWidth: 768 });
  const handleCloseModal = () => {
    setModalType(null);
  };

  const handleOpenModal = (type) => {
    setModalType(type);
  };

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  return (
    <div>
      <Toaster position="bottom-right" reverseOrder={false} />
      <AppBar openModal={handleOpenModal} toggleMenu={toggleMenu} />
      {isTabletOrLarger && isOpenMenu && (
        <MobileMenu openModal={handleOpenModal} />
      )}
      {/* {isOpenMenu && <MobileMenu openModal={handleOpenModal} />} */}
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
