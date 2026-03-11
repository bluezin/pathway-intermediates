import { Specie } from "@/components/types/species";
import Card from "../card";
import styles from "./index.module.css";

const SpeciesOption = ({
  data,
}: {
  data: {
    betterDigestion: Specie[];
    boosting: Specie[];
    improvingGut: Specie[];
  };
}) => {
  return (
    <section className={styles.container}>
      <p className={styles.title}>Better Digestion & Cost Saving</p>

      <div className={styles.content}>
        {data.betterDigestion.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>

      <p className={styles.title}>Boosting Performance</p>
      <div className={styles.content}>
        {data.boosting.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>

      <p className={styles.title}>Improving Gut Health</p>
      <div className={styles.content}>
        {data.improvingGut.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default SpeciesOption;
