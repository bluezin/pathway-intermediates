import Image from "next/image";
import styles from "./index.module.css";

const HomeMainTemplate = () => {
  const handleOpen = () => {
    window.open(`${window.location.origin}/home`, "blank");
  };

  return (
    <section className={styles.container}>
      <section
        className={styles.content}
        onClick={() => {
          handleOpen();
        }}
      >
        <div className={`${styles.img__first} ${styles.img}`} />

        <div className={styles.card}>
          <div className={styles.logo__wrap}>
            <Image
              src={"/images/pathway-logo-2.webp"}
              alt="logo-pathway"
              width={230}
              height={100}
              className={styles.logo__pathway}
            />
          </div>

          <button
            className={styles.button__pathway}
            onClick={() => {
              handleOpen();
            }}
          >
            ENTER SITE
          </button>
        </div>
      </section>

      <div className={styles.vs} aria-hidden="true">
        <p>VS</p>
      </div>

      <section
        onClick={() => {
          window.open("https://www.biomatrixintl.com/", "blank");
        }}
        className={styles.content}
      >
        <div className={`${styles.img__second} ${styles.img}`} />

        <div className={styles.card}>
          <div className={styles.logo__wrap}>
            <Image
              src={"/images/biomatrix-logo.svg"}
              alt="biomatrix-logo"
              width={260}
              className={styles.logo__biomatrix}
              height={100}
            />
          </div>

          <button
            className={styles.button__biomatrix}
            onClick={() => {
              window.open("https://www.biomatrixintl.com/", "blank");
            }}
          >
            ENTER SITE
          </button>
        </div>
      </section>
    </section>
  );
};

export default HomeMainTemplate;
