import css from "./FilterBar.module.css";

const FilterBar = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.fieldFilter}>
        <svg width={20} height={20}>
          <use href="/public/img/icons.svg#icon-drop"></use>
        </svg>
        <label htmlFor="languages">Languages</label>
        <select name="languages" id="languages">
          <option value="french">French</option>
          <option value="english">English</option>
          <option value="german">German</option>
          <option value="ukrainian">Ukrainian</option>
          <option value="polish">Polish</option>
        </select>
      </div>
      <div className={css.fieldFilter}>
        <svg width={20} height={20}>
          <use href="/public/img/icons.svg#icon-drop"></use>
        </svg>
        <label htmlFor="levelOfKnowledge">Level of knowledge</label>
        <select name="levelOfKnowledge" id="levelOfKnowledge">
          <option value="a1Beginner">A1 Beginner</option>
          <option value="a2Elementary">A2 Elementary</option>
          <option value="b1Intermediate">B1 Intermediate</option>
          <option value="b2UpperIntermediate">B2 Upper-Intermediate</option>
        </select>
      </div>
      <div style={{ width: 124 }} className={css.fieldFilter}>
        <svg width={20} height={20}>
          <use href="/public/img/icons.svg#icon-drop"></use>
        </svg>
        <label htmlFor="price">Price</label>
        <select name="price" id="price">
          <option value="10$">10 $</option>
          <option value="20$">20 $</option>
          <option value="30$">30 $</option>
          <option value="40$">40 $</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
