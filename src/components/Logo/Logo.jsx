import { Link } from "react-router-dom";
import css from "./Logo.module.css";

const Logo = () => {
  return (
    <div>
      <Link to="/" className={css.logo}>
        <svg width={28} height={28}>
          <use href="/img/icons.svg#icon-logo"></use>
        </svg>
        <span>LearnLingo</span>
      </Link>
    </div>
  );
};

export default Logo;
