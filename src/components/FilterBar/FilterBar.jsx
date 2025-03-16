import { useDispatch } from "react-redux";
import css from "./FilterBar.module.css";
import { fetchTeachersByFilter } from "../../redux/teachers/operations";
import { changeFilter } from "../../redux/filter/filterSlice";

const FilterBar = () => {
  const dispatch = useDispatch();
  const handleChangeFiler = (e) => {
    dispatch(changeFilter({ name: e.target.name, value: e.target.value }));
    dispatch(
      fetchTeachersByFilter({ name: e.target.name, value: e.target.value })
    );
  };

  return (
    <div className={css.wrapper}>
      <div className={css.fieldFilter} style={{ width: "205px" }}>
        <svg width={20} height={20}>
          <use href="/img/icons.svg#icon-drop"></use>
        </svg>
        <label htmlFor="languages">Languages</label>
        <select name="languages" id="languages" onChange={handleChangeFiler}>
          <option value="French">French</option>
          <option value="English">English</option>
          <option value="German">German</option>
          <option value="Ukrainian">Ukrainian</option>
          <option value="Polish">Polish</option>
          <option value="Mandarin_Chinese">Mandarin Chinese</option>
          <option value="Vietnamese">Vietnamese</option>
        </select>
        <svg width={20} height={20}>
          <use href="/img/icons.svg#icon-drop"></use>
        </svg>
      </div>
      <div className={css.fieldFilter} style={{ width: "235px" }}>
        <svg width={20} height={20}>
          <use href="/img/icons.svg#icon-drop"></use>
        </svg>
        <label htmlFor="levels">Level of knowledge</label>
        <select name="levels" id="levels" onChange={handleChangeFiler}>
          <option value="A1_Beginner">A1 Beginner</option>
          <option value="A2_Elementary">A2 Elementary</option>
          <option value="B1_Intermediate">B1 Intermediate</option>
          <option value="B2_Upper-Intermediate">B2 Upper-Intermediate</option>
        </select>
      </div>
      <div style={{ width: "124px" }} className={css.fieldFilter}>
        <svg width={20} height={20}>
          <use href="/public/img/icons.svg#icon-drop"></use>
        </svg>
        <label htmlFor="price_per_hour">Price</label>
        <select
          name="price_per_hour"
          id="price_per_hour"
          onChange={handleChangeFiler}
        >
          <option value="10">10-20 $</option>
          <option value="20">20-30 $</option>
          <option value="30">30-40 $</option>
          <option value="40">40-50 $</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
