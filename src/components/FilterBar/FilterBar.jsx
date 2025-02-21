import css from "./FilterBar.module.css";

const FilterBar = () => {
  return (
    <div>
      <div className={css.fieldLanguages}>
        <label htmlFor="languages">Languages</label>
        <select name="languages" id="languages">
          <option value="french">French</option>
          <option value="english">English</option>
          <option value="german">German</option>
          <option value="ukrainian">Ukrainian</option>
          <option value="polish">Polish</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
