/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./index.module.css";

const Social = () => {
  return (
    <li className={styles.menu__social}>
      <p className={styles.divider}></p>

      <ul>
        <li>
          <Link href={"https://www.facebook.com/Pathway.Intermediates.global/"}>
            <img src="/facebook.webp" alt="facebook" />
          </Link>
          Facebook
        </li>

        <li>
          <Link
            href={"https://www.linkedin.com/company/pathway-intermediates/"}
          >
            <img src="/linkedin.webp" alt="linkedin" />
          </Link>
          Linkedin
        </li>
      </ul>
    </li>
  );
};

export default Social;
