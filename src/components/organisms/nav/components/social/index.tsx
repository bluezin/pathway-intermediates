import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";

const Social = () => {
  return (
    <li className={styles.menu__social}>
      <p className={styles.divider}></p>

      <ul>
        <li>
          <Link href={"https://www.facebook.com/Pathway.Intermediates.global/"}>
            <Image width={30} height={30} src="/facebook.webp" alt="facebook" />
          </Link>
          Facebook
        </li>

        <li>
          <Link
            href={"https://www.linkedin.com/company/pathway-intermediates/"}
          >
            <Image width={30} height={30} src="/linkedin.webp" alt="linkedin" />
          </Link>
          Linkedin
        </li>
      </ul>
    </li>
  );
};

export default Social;
