import Head from "@/components/atoms/head";
import Header from "@/components/organisms/header";
import CompanionAnimalTemplate from "@/components/templates/companion-animal";

const CompanionAnimal = () => {
  return (
    <>
      <Head title="Companion Animal" description="Companion Animal" />

      <Header
        banner="/images/banners/banner-biomatrix.webp"
        title="Companion Animal"
      />
      <CompanionAnimalTemplate />
    </>
  );
};

export default CompanionAnimal;
