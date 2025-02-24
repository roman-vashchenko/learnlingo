import css from "./CommentList.module.css";

const CommentList = () => {
  return (
    <ul className={css.comentList}>
      <li className={css.commentItem}>
        <div className={css.commentItemWrap}>
          <div className={css.commentItemAvatar}></div>
          <div>
            <p className={css.commentItemName}>Frank</p>
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
              <span className={css.commentRating}>4.0</span>
            </div>
          </div>
        </div>
        <p className={css.commentItemText}>
          Jane&apos;s lessons were very helpful. I made good progress.
        </p>
      </li>
      <li className={css.commentItem}>
        <div className={css.commentItemWrap}>
          <div className={css.commentItemAvatar}></div>
          <div>
            <p className={css.commentItemName}>Eve</p>
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
              <span className={css.commentRating}>5.0</span>
            </div>
          </div>
        </div>
        <p className={css.commentItemText}>
          Jane is an amazing teacher! She is patient and supportive.
        </p>
      </li>
    </ul>
  );
};

export default CommentList;
