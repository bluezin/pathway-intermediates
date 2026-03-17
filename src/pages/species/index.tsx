import Head from "@/components/atoms/head";
import Header from "@/components/organisms/header";
import SpeciesTemplate from "@/components/templates/species";

const Species = () => {
  return (
    <>
      <Head title="Species" description="Species" />

      <Header banner="/images/banners/banner-species.webp" title="Species" />

      <SpeciesTemplate />
    </>
  );
};

export default Species;
