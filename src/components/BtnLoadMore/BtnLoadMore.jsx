import css from "./BtnLoadMore.module.css";

const BtnLoadMore = ({ hendleLoadData }) => {
  return (
    <button type="button" className={css.btn} onClick={hendleLoadData}>
      Load more
    </button>
  );
};

export default BtnLoadMore;
