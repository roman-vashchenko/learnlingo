import css from "./LanguageLevelList.module.css";

const LanguageLevelList = () => {
  return (
    <ul className={css.languageLevelList}>
      <li
        className={css.languageLevelListItem}
        style={{
          backgroundColor: "#F4C550",
          borderColor: "transparent",
        }}
      >
        #A1 Beginner
      </li>
      <li className={css.languageLevelListItem}>#A2 Elementary</li>
      <li className={css.languageLevelListItem}>#B1 Intermediate</li>
      <li className={css.languageLevelListItem}>#B2 Upper-Intermediate</li>
    </ul>
  );
};

export default LanguageLevelList;
