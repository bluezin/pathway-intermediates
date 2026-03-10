/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./index.module.css";
import { Specie } from "@/components/types/species";

const Card = ({ item }: { item: Specie }) => {
  return (
    <Link href={item.link} className={styles.card}>
      <img
        src={item.imgForTitle}
        alt={"imgForTitle"}
        className={styles.imgForTitle}
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
