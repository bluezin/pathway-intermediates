import Link from "next/link";
import styles from "./index.module.css";

const Relations = () => {
  return (
    <section className={styles.container}>
      <div className={`${styles.content} ${styles.about}`}>
        <div className={`${styles.about} ${styles.banner}`} />
        <p>Who we are?</p>
        <strong>Find out stories and learn about us</strong>
        <Link className={`button-secondary`} href="/about">
          PATHWAY
        </Link>
      </div>

      <div className={`${styles.content} ${styles.species}`}>
        <div className={`${styles.species} ${styles.banner}`} />
        <p>Interested in livestock?</p>
        <strong>Helping you achieve better results in livestock farming</strong>
        <Link href={"/species"} className={`button-secondary`}>
          SPECIES
        </Link>
      </div>

      <div className={styles.content}>
        <div className={`${styles.productList} ${styles.banner}`} />
        <p>Have you seen our products?</p>
        <strong>
          Browse our product range and find the right solution for your needs.
        </strong>
        <Link href={"/products"} className={`button-secondary`}>
          PRODUCT LIST
        </Link>
      </div>
    </section>
  );
};

export default Relations;
