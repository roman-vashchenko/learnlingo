import css from "./BtnLoadMore.module.css";

const BtnLoadMore = ({ handleLoadMore }) => {
  return (
    <button type="button" className={css.btn} onClick={handleLoadMore}>
      Load more
    </button>
  );
};

export default BtnLoadMore;
