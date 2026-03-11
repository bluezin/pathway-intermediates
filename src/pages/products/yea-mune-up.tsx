import Header from "@/components/organisms/header";
import ProductOptions from "@/components/templates/products/components/product-option";

const YeaMuneUp = () => {
  return (
    <>
      <Header banner="/banners/products/s.webp" title="Gut Health Enhancers" />

      <ProductOptions
        item={{
          subTitle: "IMMUNE ACCELERATOR",
          imgForTitle: "/products/logos/yea-mune-yup.webp",
          content: [
            {
              id: "1",
              title: "Gut is the first line of defense",
              description:
                "The gut is a vital organ where nutrient digestion and absorption take place. At the same time, it serves as the first line of defense providing barrier function against external environment. This is because the gut is heavily populated with pathogenic and opportunistic microorganisms, as well as potentially harmful molecules. In order to maintain its strong barrier function, the physical property of the gut as well as its immune system must be in optimal condition. When every factor of gut health is well harmonized, both animal performance and disease resistance can be maximized.",
            },
            {
              id: "2",
              title: "Proper immune stimulation is the basis for gut health",
              description:
                "Different stressors disrupt gut environment. Animals become more susceptible to disease and could result in excessive immune response, all of which are at the cost of energy and nutrients for growth. Therefore, maintaining gut health is imperative for satisfactory growth performance. This can be achieved by stimulating immune system to proper level, thereby improving disease resistance and minimizing energy loss.",
            },
            {
              id: "3",
              title:
                "YeaMune-UP<sup class='size-14'>®</sup>, the highly effective immune accelerator",
              description:
                "YeaMune-UP is an one-of-a-kind immune accelerator produced with <span class='italic'>Saccharomyces cerevisiae boulardii.</span> It is a highly effective functional product rich in β-glucan, mannan-oligosaccharides (MOS) and abundant nutrients. Yeast is inactivated during manufacturing process to ensure stability, safety and efficacy.",
            },
            {
              id: "4",
              title: "Benefits of YeaMune-UP<sup class='size-14'>®</sup>",
              list: [
                "YeaMune-UP is a fermented <span class='italic'>Saccaromyces cerevisiae boulardii</span> product.",
                "YeaMune-UP has antimicrobial effect by adhesion to harmful bacteria and inhibiting their activity.",
                "YeaMune-UP maximizes animal performance by its nutritional metabolites and efficacy to improve gut health",
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

export default YeaMuneUp;
