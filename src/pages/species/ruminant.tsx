import Header from "@/components/organisms/header";
import SpeciesOption from "@/components/templates/species/components/species-option";

const Ruminant = () => {
  const data = {
    betterDigestion: [
      {
        imgForTitle: "/images/products/logos2/lipidol.webp",
        link: "/products/lipidol",
        id: "2",
        description:
          "Lipidol is the world’s first absorption accelerator. It contains highly concentrated functional lysophospholipids. Lipidol accelerates nurient absorption, thereby enhances livestock performance and minimizes nutrient and energy loss in the feed.",
      },
    ],
    boosting: [
      {
        imgForTitle: "/images/products/logos2/thermo.webp",
        link: "/products/thermo-rex",
        id: "1",
        description:
          "ThermoRex is an all-in-one anti-stress solution developed by Pathway Intermediates that supports food-producing animals to overcome stress.",
      },
    ],
    improvingGut: [
      {
        imgForTitle: "/images/products/logos2/yeaMune.webp",
        link: "/products/yea-mune-up",
        id: "1",
        description:
          "YeaMune-UP is an one-of-a-kind immune accelerator produced with <span class='italic'>S.c. boulardii.</span> It is a highly effective immune accelerator rich in β-glucan, mannan-oligosaccharides (MOS) and abundant nutrients.",
      },
    ],
  };

  return (
    <>
      <Header banner="/images/banners/species/ruminant.webp" title="Ruminant" />

      <SpeciesOption data={data} />
    </>
  );
};

export default Ruminant;
