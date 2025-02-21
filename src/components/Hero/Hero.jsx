import css from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={css.section}>
      <div className={css.content}>
        <h1 className={css.title}>
          Unlock your potential with the best language tutors
        </h1>
        <p className={css.text}>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your <span>language</span> proficiency to new heights by
          connecting with highly qualified and experienced tutors.
        </p>
        <button type="button" className={css.btn}>
          Get started
        </button>
      </div>
      <div className={css.bg}></div>
    </section>
  );
};

export default Hero;
