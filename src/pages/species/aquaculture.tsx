import Header from "@/components/organisms/header";
import Species from "@/components/templates/species";

const Aquaculture = () => {
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
        imgForTitle: "/species/products/fermiko.webp",
        link: "/endopower",
        id: "1",
        description:
          "Fermkito is proven and patented fermentation product containing chitosan and chitosan oligosaccharides (COS).",
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
    ],
  };

  return (
    <>
      <Header banner="/banners/species/aquaculture.webp" title="Aquaculture" />

      <Species data={data} />
    </>
  );
};

export default Aquaculture;
