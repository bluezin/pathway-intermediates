import Header from "@/components/organisms/header";
import ProductOptions from "@/components/templates/products/components/product-option";

const Lipidol = () => {
  return (
    <>
      <Header
        banner="/banners/products/accelerator-solutions.webp"
        title="Accelerator Solutions"
      />

      <ProductOptions
        item={{
          subTitle: "THE FIRST ABSORPTION ACCELERATOR",
          imgForTitle: "/products/logos/lipidol-logo.webp",
          linkVideo:
            "https://www.youtube.com/embed/YiGlBKvPKpM?si=l0Dz_EaiKbG-TT0b",
          content: [
            {
              id: "1",
              title: "Absorption completes digestion",
              description:
                "Digestion is a 2-step process. First, ingested feed materials are broken down into readily absorbable nutrients by digestive enzymes. Then nutrients are taken up by the body. Absorption completes digestion and agents that can facilitate this process are just as important as digestive enzymes.",
            },
            {
              id: "2",
              title: "Lysophospholipids are key to nutrient absorption",
              description:
                "Lysophospholipids (LPLs) are any derivatives of phospholipids in which one of the fatty acid tails has been removed by hydrolysis.<br><br>Major components of cell membrane bi-layer are phospholipids. Due to their key functionalities in the cellular membrane, LPLs have been extensively studied and scientifically proven to affect nutrient absorption through various methods, including partial changes to the membrane structure, stimulation of protein channels, and modulation of membrane fluidity.",
            },
            {
              id: "3",
              title:
                "Lipidol<sup class='size-14'>®</sup> : a powerful combination of four functional LPLs",
              description:
                "Lipidol is composed of four different functional lysophospholipids including lysophosphatidylcholine (LPC), lysophosphatidylionsitol (LPI), lysophosphatidylethanolamine (LPE), and lysophosphatidic acid (LPA), as well as hydrolyzed soya lecithin and calcium silicate as its carriers.",
            },
            {
              id: "4",
              title: "Benefits of Lipidol<sup class='size-14'>®</sup>",
              list: [
                "Lipidol accelerates cellular nutrient, thereby enhancing livestock performance.",
                "Synergic effects of Lipidol and enzyme products can provide additional cost savings in feed formulation through complete digestion.",
                "Lipidol minimizes nutrient and energy loss from feed, hence enabling an eco-friendly and sustainable production in farm and feed businesses.",
              ],
            },
            {
              id: "5",
              description:
                "For more information and application advice, please use the contact form to reach your Pathway Intermediates representative.",
            },
          ],
        }}
      />
    </>
  );
};

export default Lipidol;
