import styles from "./index.module.css";

const BiometrixTemplate = () => {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Start Your Experience</h3>

      <p className={styles.description}>
        Lorem impsuLorem impsuLorem impsuLorem impsuLorem impsuLorem impsuLorem
        impsuLorem impsuLorem impsuLorem impsu Lorem impsuLorem impsuLorem
        impsuLorem impsuLorem impsuLorem impsuLorem impsuLorem impsuLorem
        impsuLorem impsumpsuLorem impsuLorem impsuLorem impsuLorem impsuLorem
        impsuLorem impsumpsuLorem impsuLorem impsuLorem impsuLorem impsuLorem
        impsuLorem impsu
      </p>

      <div className={styles.container__cards}>
        <div className={styles.card__biometrix}>
          <svg
            width="45"
            height="45"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              stroke="#126A83"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="8" y1="15" x2="8" y2="11" />
              <line x1="12" y1="15" x2="12" y2="8" />
              <line x1="16" y1="15" x2="16" y2="10" />
            </g>
          </svg>

          <h2 className={styles.card__biometrix__title}>Biometrix</h2>
          <p className={styles.card__biometrix__description}>
            lorem impus lorem impislorem impus lorem impislorem impus lorem
            impis
          </p>
          <button className={styles.card__biometrix__button}>More</button>
        </div>

        <div className={styles.card__pathway}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g
              stroke="white"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />

              <path d="M12 2C8 6 8 18 12 22" />
              <path d="M12 2C16 6 16 18 12 22" />

              <path d="M2 12h20" />
              <path d="M4 7c4 2 12 2 16 0" />
              <path d="M4 17c4-2 12-2 16 0" />
            </g>
          </svg>

          <h2 className={styles.card__pathway__title}>Pathway</h2>
          <p className={styles.card__pathway__description}>
            lorem impus lorem impislorem impus lorem impislorem impus lorem
            impis
          </p>

          <button className={styles.card__pathway__button}>More</button>
        </div>
        {/* <button className={styles.button__pathway}>Go to Pathway</button>
        <p>or</p>
        <button className={styles.button__biometrix}>Go to Biometrix</button> */}
      </div>
    </section>
  );
};

export default BiometrixTemplate;
