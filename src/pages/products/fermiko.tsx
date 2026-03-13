import Header from "@/components/organisms/header";
import ProductOptions from "@/components/templates/products/components/products-option";

const Fermiko = () => {
  return (
    <>
      <Header
        banner="/images/banners/products/natural.webp"
        title="Natural Growth Promoters"
      />

      <ProductOptions
        item={{
          subTitle: "THE NATURAL FERMENTED CHITOSAN AND COS",
          imgForTitle: "/images/products/logos/fermkito-logo.webp",
          content: [
            {
              id: "1",
              title: "Demand on natural alternatives to AGP",
              description:
                "Due to the rapid population and economy growth, demand on livestock products is constantly increasing. In order to meet the rising demand, livestock producers has strived with their best efforts to maximize animal productivity and produce livestock products with high quality standards.<br><br>However, the increasing regulations on antibiotic growth promoters and consumer demand on food safety has challenged the efficiency in livestock production. Now the industry is required to produce meat, milk, eggs, and other livestock products with less or no drugs and chemicals, while maintaining food quality.",
            },
            {
              id: "2",
              title: "Bringing natural marine ingredients",
              img: "/products/fermkito-info.webp",
              description:
                "Marine crustacean such as lobsters, crabs and shrimp are flavorful protein source that have been popular throughout history. Crustacean has another benefit of providing good source of bio-functional ingredients, such as chitosan and chitosan oligosaccharides (COS).<br><br>Chitosan and COS are derived from chitin, which is abundant in marine crustacean shells. They possess antibacterial, prebiotic, growth promoting and cholesterol-lowering activities. As sustainable ingredients found in nature, both chitosan and COS can be applied in animals to improve their performance and productivity without causing any resistance or residue problems that are frequently associated with drug use.",
            },
            {
              id: "3",
              title:
                "Fermkito<sup class='size-14'>®</sup>, the natural fermented chitosan and COS",
              description:
                "Fermkito is a natural fermented chitosan and COS product produced through solid fermentation with qualified crab shells. With over 30 years of expertise in fermentation technology dedicated for animal nutrition, Pathway Intermediates has successfully converted chitin to chitosan and COS which is more bio-functional and available to animals.<br><br>The unique characteristics of the fermented chitosan and COS in Fermkito can improve animal growth performance and productivity. Espeically, when laying hens develop fatty liver syndrome due to the positive energy balance, Fermkito contribute to the improvement of health status by managing body cholesterol metabolism, thereby enhances overall survival and productivity.",
            },
            {
              id: "4",
              title: "Benefits of Fermkito<sup class='size-14'>®</sup>",
              list: [
                "Fermkito contains natural fermented chitosan and COS to improve animal performance.",
                "Fermkito improves body cholesterol metabolism and controls fatty liver syndrome.",
                "Fermkito enhances productivity and egg quality in laying hens.",
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

export default Fermiko;
