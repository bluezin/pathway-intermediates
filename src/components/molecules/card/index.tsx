import Link from "next/link";
import styles from "./index.module.css";
import { Specie } from "@/components/types";
import Image from "next/image";

const Card = ({ item }: { item: Specie }) => {
  return (
    <Link href={item.link} className={styles.card}>
      <Image
        src={item.imgForTitle}
        alt="Product logo"
        className={styles.imgForTitle}
        width={298}
        height={35}
      />

      <p
        dangerouslySetInnerHTML={{ __html: item.description }}
        className={styles.description}
      />

      <p className={styles.more}>More</p>
    </Link>
  );
};

export default Card;
