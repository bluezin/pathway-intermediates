import Header from "@/components/organisms/header";
import ProductOptions from "@/components/templates/products/components/products-option";

const QLife = () => {
  return (
    <>
      <Header
        banner="/banners/products/grains.webp"
        title="Gut Health Enhancers"
      />

      <ProductOptions
        item={{
          subTitle: "NATURAL ALTERNATIVE TO ANTICOCCIDIALS",
          imgForTitle: "/products/logos/q-life-logo.webp",
          linkVideo:
            "https://www.youtube.com/embed/fLocDAdaozE?si=NFOal74kkGosKQ8B",
          content: [
            {
              id: "1",
              title: "Challenges in the antibiotic-free era",
              description:
                "The growing consumer demand on food safety has rapidly increased the growth in “antibiotic-free” or “organic” labeled markets. This has provided the driving force for a sustainable livestock industry, especially in poultry. As the largest livestock industry across different species, the poultry industry has contributed much efforts to reduce or even cease the use of antibiotic agents in everyday practices. However, antibiotic-free and anticoccidial drug-free approaches have become a challenge to poultry producers when facing coccidiosis. Coccidiosis is a pervasive parasitic disease caused by coccidian protozoa genus, <span class='italic'>Eimeria</span>, that infects multiple animal species such as poultry and cattle. <span class='italic'>Eimeria</span> poses great threat to the livestock industry because of its rapid life cycle, typically 4 to 6 days. This enables coccidiosis to spread quickly, infecting the entire herd or flock, and consequently resulting in significant losses under modern intensive farming.",
            },
            {
              id: "2",
              title: "The search for a natural solution",
              description:
                "Anticoccidial drugs have been widely used to prevent and treat coccidiosis. However, emerging concerns on drug resistance and residuals have left producers to look for an alternative strategy against this disease. Phytochemicals have found to be a promising solution to overcome coccidiosis challenge in the antibiotic-free era. Phytochemicals are natural bioactive compounds derived from herbal plants, and have been traditionally used in food, cosmetics, and folk remedies. These bioactive compounds have shown to have antioxidant, anti-inflammatory and antimicrobial effects against pathogens. Therefore, phytochemicals are the natural solution for coccidiosis control, that can result in improved animal performance without any residue problems.",
            },
            {
              id: "3",
              title:
                "Q-Life<sup class='size-14'>®</sup>: natural alternative to anticoccidials",
              description:
                "Q-Life is a natural alternative solution to anticoccidials with proven results for coccidiosis control and animal growth improvement. It contains phytogenic ingredients that have been carefully selected and tested by Pathway Intermediates for safety, efficacy and stability. The optimal combination of allicin, curcumin and thymol in Q-Life have shown maximum anticoccidial effect against <span class='italic'>Eimeria</span> with beneficial outcomes. This powerful combination allows Q-Life to control coccidiosis and enhance growth performance of animals while ensuring food safety and agricultural sustainability.",
            },
            {
              id: "4",
              title: "Benefits of Q-Life<sup class='size-14'>®</sup>",
              list: [
                "Q-Life is a natural alternative solution to anticoccidials for 100% AGP-free production.",
                "Q-Life improves animal performance and control disease.",
                "Q-Life does not require withdrawal period and leaves no residues in animals.",
              ],
            },
            {
              id: "5",
              description:
                "For more information and application advice, please contact your Pathway Intermediates representative.",
            },
          ],
        }}
      />
    </>
  );
};

export default QLife;
