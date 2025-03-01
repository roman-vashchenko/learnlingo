import css from "./LanguageLevelList.module.css";

const LanguageLevelList = ({ levels }) => {
  return (
    <ul className={css.languageLevelList}>
      {levels.map((level, idx) => (
        <li key={idx} className={css.languageLevelListItem}>
          {level}
        </li>
      ))}
    </ul>
  );
};

export default LanguageLevelList;
