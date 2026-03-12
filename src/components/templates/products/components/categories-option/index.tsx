import Card from "@/components/molecules/card";
import { CategoryData } from "@/components/types";
import styles from "./index.module.css";

const CategoriesOption = ({
  title,
  data,
}: {
  title: string;
  data: CategoryData[];
}) => {
  return (
    <section className={styles.container}>
      <p className={styles.title}>{title}</p>

      <div className={styles.content}>
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default CategoriesOption;
