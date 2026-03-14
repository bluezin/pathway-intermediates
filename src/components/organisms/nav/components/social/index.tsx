import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";

const Social = () => {
  return (
    <li className={styles.menu__social}>
      <p className={styles.divider}></p>
      <ul>
        <li>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"https://www.facebook.com/Pathway.Intermediates.global/"}
          >
            <Image
              width={30}
              height={30}
              src="/images/facebook.webp"
              alt="facebook"
            />
            Facebook
          </Link>
        </li>

        <li>
          <Link
            href={"https://www.linkedin.com/company/pathway-intermediates/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              width={30}
              height={30}
              src="/images/linkedin.webp"
              alt="linkedin"
            />
            Linkedin
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default Social;
