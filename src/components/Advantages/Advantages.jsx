import css from "./Advantages.module.css";

const Advantages = () => {
  return (
    <section className={css.section}>
      <ul className={css.list}>
        <li className={css.item}>
          <span>32,000 +</span>
          <p>Experienced tutors</p>
        </li>
        <li className={css.item}>
          <span>300,000 +</span>
          <p>5-star tutor reviews</p>
        </li>
        <li className={css.item}>
          <span>120 +</span>
          <p>Subjects taught</p>
        </li>
        <li className={css.item}>
          <span>200 +</span>
          <p>Tutor nationalities</p>
        </li>
      </ul>
    </section>
  );
};

export default Advantages;
