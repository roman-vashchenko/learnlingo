import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={css.wrapper}>
      <button type="button" className={css.logInBtn}>
        <svg width={20} height={20}>
          <use href="/public/symbol-defs.svg#icon-log-in"></use>
        </svg>
        <span>Log in</span>
      </button>
      <button type="button" className={css.registrationBtn}>
        Registration
      </button>
    </div>
  );
};

export default AuthNav;
