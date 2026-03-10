import styles from "./index.module.css";
import Relations from "./components/relations";
import Notices from "./components/notices";

const HomeTempalte = () => {
  return (
    <section>
      <Notices />
      <Relations />
    </section>
  );
};

export default HomeTempalte;
