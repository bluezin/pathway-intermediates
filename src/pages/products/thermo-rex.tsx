import Header from "@/components/organisms/header";
import ProductOptions from "@/components/templates/products/components/product-option";

const ThermoRex = () => {
  return (
    <>
      <Header
        banner="/banners/products/grains.webp"
        title="Functional Feed Additives"
      />

      <ProductOptions
        item={{
          subTitle: "All-in-One Anti-Stress Solution",
          imgForTitle: "/products/logos/thermo-rex-logo.webp",
          content: [
            {
              id: "1",
              description:
                " With regards to food-producing animals, productivity is one of the important factors taken into account. However, food-producing animals are challenged with various stressors that compromise the productivity of the animals and result in economic losses to producers.<br><br>ThermoRex is an all-in-one anti-stress solution developed by Pathway Intermediates that supports food-producing animals to overcome stress. It contains an immune stimulator providing an adequate immune system to ameliorate the negative effects of stress. Under stress conditions, animals' body temperature is easily elevated, resulting in negative effects on production. Moreover, food-producing animals are reluctant to consume feed resulting in lower productivity. A novel ingredient, one of the active ingredients in ThermoRex, absorbs heat through an endothermic reaction reducing the elevated body temperature in animals which effectively relieves stress, thus contributing to the improvement of animal productivity. In addition, ThermoRex gives a solution by improving nutrient and energy digestibility. Although lower feed intake of animals, improved digestibility of nutrients and energy may alleviate the reduction in performance.<br><br>Combining these active ingredients together, ThermoRex provides an all-in-one anti-stress solution to animals contributing to overcome various stressors.",
            },
            {
              id: "2",
              title: "Benefits of ThermoRex",
              list: [
                "ThermoRex alleviates the negative effects of stress by improving nutrient and energy digestibility in animals and providing them an adequate immune system to fight against stress.",
              ],
            },
            {
              id: "3",
              description:
                "For more information and application advice, please use the contact form to reach your Pathway Intermediates representative.",
            },
          ],
        }}
      />
    </>
  );
};

export default ThermoRex;
