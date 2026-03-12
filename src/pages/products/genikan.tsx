import Header from "@/components/organisms/header";
import ProductOptions from "@/components/templates/products/components/products-option";

const Genikan = () => {
  return (
    <>
      <Header
        banner="/banners/products/grains.webp"
        title="Gut Health Enhancers"
      />

      <ProductOptions
        item={{
          subTitle: "HIGH QUALITY YEAST CULTURE FOR GASTROINTESTINAL HEALTH",
          imgForTitle: "/products/logos/genikan-logo.webp",
          content: [
            {
              id: "1",
              title:
                "Genikan<sup class='size-14'>®</sup>, the king of yeast culture",
              description:
                "Genikan is the high-quality yeast culture fermented with extruded corn and soybean meal. It is produced from selected Saccharomyces cerevisiae through optimized fermentation process. Maximized nutritional components in Genikan enhance gastrointestinal health in animal.",
            },
            {
              id: "2",
              title: "Optimized fermentation process to maximize benefits",
              img: "/products/genikan-info.webp",
              description:
                "Two-step fermentation process is applied for the production of Genikan. The first step, Liquid Fermentation, is to maximize the microbial growth of Saccharomyces cerevisiae and the second step, Solid-State Fermentation, is to optimize the production of functional metabolites. Also, the unique flavor of Genikan has the effects on improving the palatability of the feed.",
            },
            {
              id: "3",
              title:
                "Valuable fermentation metabolites from Genikan<sup class='size-14'>®</sup>",
              description:
                "Genikan contains plenty of organic acids, vitamins, amino acids, enzymes, etc. these nutritional components are preserved through low temperature drying system and deliver beneficial effects when supplemented to animal. High quality nutritious metabolites can function as Antimicrobial, Prebiotic, and Antioxidant substances, resulting in the healthy gut and animal by protecting them from pathogens and stress conditions. This can contribute to the improvement of animal performance.",
            },
            {
              id: "4",
              title: "Benefits of Genikan<sup class='size-14'>®</sup>",
              list: [
                "Genikan increases nutrient digestibility and palatability by its maximized beneficial components.",
                "Nutritional metabolites in Genikan contribute to improvement in growth performance and productivity.",
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

export default Genikan;
