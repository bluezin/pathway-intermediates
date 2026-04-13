import Image from "next/image";
import styles from "./index.module.css";

const CompanionAnimal = () => {
  return (
    <section className={styles.container} id="pathwayVSbiomatrix">
      <h3 className={styles.title}>CHOOSE YOUR SOLUTION</h3>
      <div className={styles.sub__container}>
        <div style={{ backgroundColor: "#f4f8ff" }} className={styles.card}>
          <Image
            src={"/images/pathway-home.png"}
            alt="pathway"
            width={390}
            height={350}
          />
          <button
            onClick={() => {
              window.open("https://www.pathway-intermediates.com/", "_blank");
            }}
            className={`${styles.more} ${styles.more__pathway}`}
          >
            More
          </button>
        </div>

        <button className={styles.versus}>VS</button>

        <div style={{ background: "#f3fff5" }} className={styles.card}>
          <Image
            src={"/images/biomatrix-home.webp"}
            alt="pathway"
            width={390}
            height={350}
          />
          <button
            onClick={() => {
              window.open("https://www.biomatrixintl.com/", "_blank");
            }}
            className={`${styles.more} ${styles.more__biometrix}`}
          >
            More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompanionAnimal;
