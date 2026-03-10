import Header from "@/components/organisms/header";
import SpeciesTemplate from "@/components/templates/species";

const Swine = () => {
  const data = {
    betterDigestion: [
      {
        imgForTitle: "/species/products/endopower.webp",
        link: "/endopower",
        id: "1",
        description:
          "Endo-Power is powerful digestion accelerator. It contains optimal enzymes for corn-soybean meal based diet, targeting NSPs for accelerated hydrolyzation.",
      },
      {
        imgForTitle: "/species/products/lipidol.webp",
        link: "/endopower",
        id: "2",
        description:
          "Lipidol is the world’s first absorption accelerator. It contains highly concentrated functional lysophospholipids. Lipidol accelerates nurient absorption, thereby enhances livestock performance and minimizes nutrient and energy loss in the feed.",
      },
      {
        imgForTitle: "/species/products/endophos.webp",
        link: "/endoPhos",
        id: "3",
        description:
          "Endo-Phos is highly effective phytase. It increases bioavailability of phosphorus and other nutrients including minerals and reduces feed costs and phosphorus loss.",
      },
    ],
    boosting: [
      {
        imgForTitle: "/species/products/proBe.webp",
        link: "/endopower",
        id: "1",
        description:
          "ProBe-Bac is a mixture of bacteriophages precisely selected against specific poultry or swine disease. It effectively controls various diseases that are prevalent in poultry or swine industry.",
      },
      {
        imgForTitle: "/species/products/growmax.webp",
        link: "/endopower",
        id: "1",
        description:
          "GrowMax is the organic chromium picolinate product for animal performance. It improves the reproductive performance and reduces stress in animals.",
      },
      {
        imgForTitle: "/species/products/boar.webp",
        link: "/endopower",
        id: "1",
        description:
          "Boar Power Max is cookie-type nutritional balanced supplement for boar performance. It contains L-Carnitine and Cr-picolinate to enhance boar performance.",
      },
      {
        imgForTitle: "/species/products/fermiko.webp",
        link: "/endopower",
        id: "1",
        description:
          "Fermkito is proven and patented fermentation product containing chitosan and chitosan oligosaccharides (COS).",
      },
      {
        imgForTitle: "/species/products/thermo.webp",
        link: "/endopower",
        id: "1",
        description:
          "ThermoRex is an all-in-one anti-stress solution developed by Pathway Intermediates that supports food-producing animals to overcome stress.",
      },
    ],
    improvingGut: [
      {
        imgForTitle: "/species/products/yeaMune.webp",
        link: "/endopower",
        id: "1",
        description:
          "YeaMune-UP is an one-of-a-kind immune accelerator produced with <span class='italic'>S.c. boulardii.</span> It is a highly effective immune accelerator rich in β-glucan, mannan-oligosaccharides (MOS) and abundant nutrients.",
      },
      {
        imgForTitle: "/species/products/genikan.webp",
        link: "/endopower",
        id: "1",
        description:
          "Genikan is high-quality yeast culture for gastrointestinal health. It is new generation of Yeasture, which has been produced and supplied for more than 17 years.",
      },
    ],
  };

  return (
    <>
      <Header banner="/banners/species/swine.webp" title="Swine" />

      <SpeciesTemplate data={data} />
    </>
  );
};

export default Swine;
