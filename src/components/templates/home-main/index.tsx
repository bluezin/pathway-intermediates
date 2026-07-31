import Image from "next/image";
import { BIOMATRIX_URL } from "@/constants";
import styles from "./index.module.css";

const HomeMainTemplate = () => {
  const handleOpenPathway = () => {
    window.open(`${window.location.origin}/home`, "_blank");
  };

  const handleOpenBioMatrix = () => {
    window.open(BIOMATRIX_URL, "_blank");
  };

  return (
    <section className={styles.container}>
      <section
        className={styles.content}
        onClick={() => {
          handleOpenPathway();
        }}
      >
        <div className={`${styles.img__first} ${styles.img}`} />

        <div className={styles.card}>
          <div className={styles.logo__wrap}>
            <Image
              src={"/images/pathway-logo-2.webp"}
              alt="Pathway logo"
              width={230}
              height={100}
              className={styles.logo__pathway}
            />
          </div>

          <button
            className={styles.button__pathway}
            onClick={() => {
              handleOpenPathway();
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
          handleOpenBioMatrix();
        }}
        className={styles.content}
      >
        <div className={`${styles.img__second} ${styles.img}`} />

        <div className={styles.card}>
          <div className={styles.logo__wrap}>
            <Image
              src={"/images/biomatrix-logo.svg"}
              alt="BioMatrix logo"
              width={260}
              className={styles.logo__biomatrix}
              height={100}
            />
          </div>

          <button
            className={styles.button__biomatrix}
            onClick={() => {
              handleOpenBioMatrix();
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
