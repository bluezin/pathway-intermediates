import Link from "next/link";
import styles from "./index.module.css";

const SpeciesTemplate = () => {
  const card = ({
    title,
    link,
    id,
  }: {
    title: string;
    link: string;
    id: string;
  }) => (
    <Link href={link} className={styles.container__link}>
      <div className={`${styles[id]} ${styles.container__link__banner}`} />
      <h2 className={styles.container__link__title}>{title}</h2>
      <p className={styles.container__link__sub__divider}></p>
      <p className={styles.container__link__more}>More</p>
    </Link>
  );

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Pathway Species</h1>
      <p className={styles.divider}></p>
      <h2 className={styles.description}>
        Our solutions are continuously being researched at leading universities
        and research institutes, and the feed product development team and farm
        research teams are constantly monitoring our products. We focus our
        energies on continually seeking where our expertise is best spent,
        listening and assisting our customers, providing them with solutions
        where they are needed.
      </h2>

      <div className={styles.container__cards}>
        {card({ link: "/species/swine", title: "Swine", id: "swine" })}
        {card({ link: "/species/poultry", title: "Poultry", id: "poultry" })}
        {card({ link: "/species/ruminant", title: "Ruminant", id: "ruminant" })}
        {card({
          link: "/species/aquaculture",
          title: "Aquaculture",
          id: "aquaculture",
        })}
      </div>
    </section>
  );
};

export default SpeciesTemplate;
