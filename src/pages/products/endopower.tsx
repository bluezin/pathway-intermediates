import Header from "@/components/organisms/header";
import ProductOptions from "@/components/templates/products/components/products-option";

const Endophos = () => {
  return (
    <>
      <Header
        banner="/images/banners/products/condiments.webp"
        title="Accelerator Solutions"
      />

      <ProductOptions
        item={{
          subTitle: "POWERFUL DIGESTION ACCELERATOR",
          imgForTitle: "/images/products/logos/endopower-logo.webp",
          linkVideo:
            "https://www.youtube.com/embed/IObVtmKTDzY?si=7IzKqkCCI-vp0EJi",
          content: [
            {
              id: "1",
              title: "Hydrolysis initiates digestion",
              description:
                "Digestion is a 2-step process. First, ingested feed materials are broken down into readily absorbable nutrients by digestive enzymes. Enzymes are protein molecules that catalyze biochemical reactions. Almost all metabolic processes in living organism require enzyme catalysis for proper biological functions to sustain life. Enzymes such as carbohydrases, lipases, and proteases exist in the gastrointestinal tract (GIT) of animal for the digestion of feed ingredients.",
            },
            {
              id: "2",
              title: "Abundance of non-starch polysaccharides in feed",
              description:
                "A significant amount of non-starch polysaccharides (NSP) are introduced into the GIT of monogastric animals cannot be readily digested by the host. These are largely the structural carbohydrates, abundant in plant cell walls.  Other than the fact that these complex carbohydrates are indigestible, the physical structure of the endosperm cell wall further impairs the digestibility of other nutrients, as they obstruct access to digestive enzymes, or encapsulate digestible substrates causing them to leave the GIT undigested.  This is more evident when diets include viscous grain sources, which are generally high in NSP content, as it induces increased intestinal viscosity, which slows down the rate of digestion. Also, high NSP contents are considered anti-nutritional as it leads to reductions in voluntary feed intake and nutrient digestibility.",
            },
            {
              id: "3",
              title:
                "Endo-Power<sup class='size-14'>®</sup> is the right key to nutrient digestion",
              description:
                "As a lock can be opened with the right key, all enzymes are substrate specific as they can only be activated upon encountering the desired substrate. Endo-Power is composed of α-galactosidase, galactomannanase, xylanase, and β-glucananse. It is produced from solid-state fermentation of non-GMO fungi, <span class='italic'>Aspergillus niger</span> and <span class='italic'>Aspergillus oryzae</span>. This unique fermentation process provides additional ancillary enzymes such as amylase, phytase, etc. for the complete breakdown of feed ingredients.",
            },
            {
              id: "4",
              title: "Benefits of Endo-Power<sup class='size-14'>®</sup>",
              list: [
                "Endo-Power is composed of α-galactosidase, galactomannanase, xylanase, β-glucanase and additional ancillary enzymes such as amylase, phytase, and protease from solid-state fermentation of non-GMO fungi.",
                "Endo-Power maximizes nutrient utilization and energy availability by removing anti-nutritional factors, and reducing the digesta viscosity",
                "Endo-Power contributes to healthier gut by preventing disorders occurred from the further fermentation of undigested nutrients in the hindgut.",
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

export default Endophos;
