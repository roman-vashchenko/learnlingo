import { useState } from "react";
import BtnLoadMore from "../../components/BtnLoadMore/BtnLoadMore";
import FilterBar from "../../components/FilterBar/FilterBar";
import ModalBookTrialLesson from "../../components/ModalBookTrialLesson/ModalBookTrialLesson";
import TeachersList from "../../components/TeachersList/TeachersList";
import css from "./TeachersPage.module.css";

const TeachersPage = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  return (
    <section className={css.section}>
      <FilterBar />
      <TeachersList openModal={handleOpenModal} />
      <BtnLoadMore />
      {modalIsOpen && (
        <ModalBookTrialLesson isOpen onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default TeachersPage;
