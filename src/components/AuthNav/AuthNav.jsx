import css from "./AuthNav.module.css";

const AuthNav = ({ openModal }) => {
  return (
    <div className={css.wrapper}>
      <button
        type="button"
        className={css.logInBtn}
        onClick={() => openModal("login")}
      >
        <svg width={20} height={20}>
          <use href="/img/icons.svg#icon-log-in"></use>
        </svg>
        <span>Log in</span>
      </button>

      <button
        type="button"
        className={css.registrationBtn}
        onClick={() => openModal("register")}
      >
        Registration
      </button>
    </div>
  );
};

export default AuthNav;
