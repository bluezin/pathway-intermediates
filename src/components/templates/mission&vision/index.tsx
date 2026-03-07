import styles from "./index.module.css";

const MissionAndVisionTemplate = () => {
  return (
    <section className={styles.container}>
      <div className={`${styles.first__content} ${styles.content}`}>
        <h2 className={styles.title}>Our Vision</h2>
        <p className={styles.divider}></p>
        <p className={styles.description}>
          We firmly believe that the future of animal feed additives lies in
          precision solutions. With more target specific products, we can
          improve animal nutrition with lower inclusion levels. This leads to
          cost-savings for producers, while successfully reducing the use of
          antibiotics, and increases the safety for people, animals and the
          environment.
        </p>
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>Our Mission</h2>
        <p className={styles.divider}></p>
        <p className={styles.description}>We deliver the value-added solution of feeding tomorrow</p>
      </div>
    </section>
  );
};

export default MissionAndVisionTemplate;
