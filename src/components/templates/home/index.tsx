import Relations from "./components/relations";
import Notices from "./components/notices";
import CompanionAnimal from "./components/companion-animal";

const HomeTempalte = () => {
  return (
    <section>
      <CompanionAnimal />
      <Notices />
      <Relations />
    </section>
  );
};

export default HomeTempalte;
