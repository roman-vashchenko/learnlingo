import css from "./Logo.module.css";

const Logo = () => {
  return (
    <div>
      <a href="" className={css.logo}>
        <svg width={28} height={28}>
          <use href="/public/symbol-defs.svg#icon-logo"></use>
        </svg>
        <span>LearnLingo</span>
      </a>
    </div>
  );
};

export default Logo;
