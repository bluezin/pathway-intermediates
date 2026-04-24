import Seo from "@/components/atoms/seo";
import Header from "@/components/organisms/header";
import SpeciesTemplate from "@/components/templates/species";

const Species = () => {
  return (
    <>
      <Seo
        title="Species - Pathway"
        description="Boar Power Max is a cookie-type nutritional supplement designed to enhance boar performance, containing L-Carnitine and chromium picolinate."
      />

      <Header banner="/images/banners/banner-species.webp" title="Species" />

      <SpeciesTemplate />
    </>
  );
};

export default Species;
