import Seo from "@/components/atoms/seo";
import Header from "@/components/organisms/header";
import CompanionAnimalTemplate from "@/components/templates/companion-animal";

const CompanionAnimal = () => {
  return (
    <>
      <Seo title="Companion Animal - Pathway" description="Companion Animal" />

      <Header
        banner="/images/banners/banner-biomatrix.webp"
        title="Companion Animal"
      />
      <CompanionAnimalTemplate />
    </>
  );
};

export default CompanionAnimal;
