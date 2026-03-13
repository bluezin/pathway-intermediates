import Header from "@/components/organisms/header";
import ProductOptions from "@/components/templates/products/components/products-option";

const Endophos = () => {
  return (
    <>
      <Header
        banner="/images/banners/products/natural.webp"
        title="Natural Growth Promoters"
      />

      <ProductOptions
        item={{
          subTitle: "THE HIGHLY EFFECTIVE PHYTASE",
          imgForTitle: "/images/products/logos/endophos-logo.webp",
          content: [
            {
              id: "1",
              description:
                "Phytate, which is an insoluble component  in feed, exists in the salt form as phytic acid. Phytic acid is used as an essential energy source such as in the germination of plant seeds. However it forms phytate by binding with minerals in the animal body which is not bioavailable to monogastric animals.<br><br>In general, phosphorus in phytate form accounts for 56~70% of feed grains and by-products and only about 30% of phosphorus in feed can be utilized by animals. Phytic acid in animals not only inhibits phosphorus utilization within the body, but also reduces the availability of other minerals since it forms salts with Calcium and Magnesium.<br><br>Phytase can be supplemented in feed to improve the availability of phytic acid and other minerals, and to reduce the amount of inorganic phosphorus in feed. Phytase can also improve environment by reducing undigested phytate which is excreted and cause soil contamination.",
            },
            {
              id: "2",
              title: "Benefits of Endo-Phos<sup class='size-14'>®</sup>",
              list: [
                "Endo-Phos increases phosphorus bioavailability and nutrient availability including other minerals, and reduces feed costs, and phosphorus excretion",
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

export default Endophos;
