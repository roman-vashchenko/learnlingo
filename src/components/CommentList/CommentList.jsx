import css from "./CommentList.module.css";
import { FaUserAlt } from "react-icons/fa";

const CommentList = ({ reviews }) => {
  return (
    <ul className={css.comentList}>
      {reviews.map((reviews, idx) => (
        <li key={idx} className={css.commentItem}>
          <div className={css.commentItemWrap}>
            <div className={css.commentItemAvatar}>
              <FaUserAlt size={30} />
            </div>
            <div>
              <p className={css.commentItemName}>{reviews.reviewer_name}</p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <svg width={16} height={16}>
                  <use href="/img/icons.svg#icon-star"></use>
                </svg>
                <span className={css.commentRating}>
                  {reviews.reviewer_rating}
                </span>
              </div>
            </div>
          </div>
          <p className={css.commentItemText}>{reviews.comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
