import css from "./BtnMenu.module.css";

const BtnMenu = ({ toggleMenu }) => {
  return (
    <div>
      <button className={css.btn} type="button" onClick={() => toggleMenu()}>
        MENU
      </button>
    </div>
  );
};

export default BtnMenu;
