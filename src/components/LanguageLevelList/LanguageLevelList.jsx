import css from "./LanguageLevelList.module.css";

const LanguageLevelList = ({ levels }) => {
  return (
    <ul className={css.languageLevelList}>
      {Object.keys(levels).map((level) => (
        <li key={level} className={css.languageLevelListItem}>
          {level.replace(/_/g, " ")}
        </li>
      ))}
    </ul>
  );
};

export default LanguageLevelList;
