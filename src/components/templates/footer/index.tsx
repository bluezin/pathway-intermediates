import Image from "next/image";
import styles from "./index.module.css";

const Footer = () => {
  const date = new Date();

  return (
    <footer className={styles.footer}>
      <div className={styles.container__image}>
        <Image src={"/images/footer-logo.webp"} alt="logo" fill />
      </div>

      <div className={styles.content}>
        <p>© {date.getFullYear()} Pathway Intermediates</p>
        <p>
          ® is a trademark of Pathway Intermediates and Pathway Intermediates
          International in Republic of Korea and/or other countries
        </p>
      </div>
    </footer>
  );
};

export default Footer;
