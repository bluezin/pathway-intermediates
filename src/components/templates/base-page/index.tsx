import Link from "next/link";
import styles from "./index.module.css";

interface Card {
  title: string;
  link: string;
  id: string;
  bannerUrl: string;
}

const BasePage = ({
  title,
  description,
  listCards,
}: {
  listCards: Card[];
  title: string;
  description: string;
}) => {
  const card = ({ title, link, id, bannerUrl }: Card) => (
    <Link href={link} className={styles.container__link} key={id}>
      <div
        style={{
          background: `url(${bannerUrl}) center no-repeat`,
          backgroundSize: "100%",
        }}
        className={styles.container__link__banner}
      />
      <h2 className={styles.container__link__title}>{title}</h2>
      <p className={styles.container__link__sub__divider}></p>
      <p className={styles.container__link__more}>More</p>
    </Link>
  );

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.divider}></p>
      <h2 className={styles.description}>{description}</h2>

      {listCards.length && (
        <div className={styles.container__cards}>
          {listCards.map((item: Card) => card({ ...item }))}
        </div>
      )}
    </section>
  );
};

export default BasePage;
