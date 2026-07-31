import Image from "next/image";
import { BIOMATRIX_URL, PATHWAY_URL } from "@/constants";
import styles from "./index.module.css";
import Link from "next/link";

const BioMatrixTemplate = () => {
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
        <Link
          href={PATHWAY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card__pathway}
        >
          <Image
            src="/images/pathway-logo.webp"
            alt="Pathway logo"
            fill
            className={styles.card__pathway__logo}
          />
          <p className={styles.card__pathway__description}>
            lorem impus lorem impislorem impus lorem impislorem impus lorem
            impis
          </p>

          <button className={styles.card__pathway__button}>More</button>
        </Link>

        <Link
          href={BIOMATRIX_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card__biometrix}
        >
          <Image
            src="/images/biomatrix-logo.svg"
            alt="BioMatrix logo"
            width={30}
            height={50}
            className={styles.card__biomatrix__logo}
          />

          <p className={styles.card__biometrix__description}>
            lorem impus lorem impislorem impus lorem impislorem impus lorem
            impis
          </p>
          <button className={styles.card__biometrix__button}>More</button>
        </Link>
      </div>
    </section>
  );
};

export default BioMatrixTemplate;
