import Header from "@/components/organisms/header";
import ProductOptions from "@/components/templates/products/components/product-option";

const ProbeBac = () => {
  return (
    <>
      <Header
        banner="/banners/products/grains.webp"
        title="Functional Feed Additives"
      />

      <ProductOptions
        item={{
          subTitle: "New Preventative Approach for Bacterial Infection",
          imgForTitle: "/products/logos/probe-bac-logo.webp",
          linkVideo:
            "https://www.youtube.com/embed/iiqjt4I9jbc?si=x6VhnjsEDTt9ezij",
          content: [
            {
              id: "1",
              title: "Demand for safe and sustainable alternatives to AGP",
              description:
                "Antibiotic resistance is one of the most serious threat to general public health. In the effort to minimize risk of antibiotic resistance, actions to reduce and eliminate the use of antibiotic growth promoter (AGP) in livestock industry are increasing mandatorily and voluntarily. However, such movement have induced significant economic loss for producers and increased usage of antibiotics for therapeutic treatments. The demand for alternatives to AGP is ever strong – for a new solution that not only can directly combat antibiotic resistant bacteria but enhance efficacy of therapeutic treatments.",
            },
            {
              id: "2",
              title:
                "Bacteriophage is the next generation of alternatives to AGP",
              description:
                "Lytic bacteriophage is a microorganism that selectively kills bacteria in a species-specific manner, without causing any genetic mutation. The U.S. FDA has approved bacteriophage as GRAS (Generally Recognized As Safe) substance.",
            },
            {
              id: "3",
              title:
                "ProBe-Bac<sup class='size-14'>®</sup> is the latest bacteriophage solution",
              description:
                "ProBe-Bac is the latest bacteriophage solution from Pathway Intermediates. It is created based on the real-time upgrade system, powered by Optipharm. Pathogenic bacteria population is constantly monitored and any significant disease outbreak will lead to solution upgrade in real-time.",
            },
            {
              id: "4",
              title:
                "ProBe-Bac<sup class='size-14'>®</sup> : a powerful combination of selected bacteriophages",
              description:
                "ProBe-Bac is a cocktail product containing mixture of bacteriophages precisely selected against specific disease. This powerful combination allows ProBe-Bac to tackle various diseases that are prevalent in poultry or swine industry.",
            },
            {
              id: "5",
              title: "Benefits of ProBe-Bac<sup class='size-14'>®</sup>",
              list: [
                "ProBe-Bac is a mixture of bacteriophages precisely selected against various disease that are prevalent in poultry or swine industry.",
                "ProBe-Bac improves animal performance by directly reducing pathogenic bacteria.",
                "ProBe-Bac enhances effectiveness of therapeutic antibiotics by destroying and penetrating biofilm of pathogens.",
              ],
            },
            {
              id: "6",
              title: "Product Range",
              list: ["Poultry: ProBe-Bac PE", "Swine: ProBe-Bac SE"],
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

export default ProbeBac;
