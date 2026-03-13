import Header from "@/components/organisms/header";
import ProductOptions from "@/components/templates/products/components/products-option";

const BoarPowerMax = () => {
  return (
    <>
      <Header
        banner="/images/banners/products/spices.webp"
        title="Functional Feed Additives"
      />

      <ProductOptions
        item={{
          subTitle: "NUTRITIONAL BALANCED SUPPLEMENT FOR BOAR PERFORMANCE",
          imgForTitle: "/images/products/logos/boar-power-max-logo.webp",
          content: [
            {
              id: "1",
              description:
                "In order to maximize the ability of breeding pigs, it is important to provide the most appropriate nutrient levels in feed. Boar Power Max is made of high functional ingredients that are excellent for breeding capacity and stress alleviation.<br><br>Boar Power Max is a cookie form which can be supplemented as snack and maximizes usability. It includes L-Carnitine to increase available essential energy for sperm cell growth and its motility and have further effects in preventing stress. In addition, Cr-picolinate, a functional and essential mineral, is reinforced to activate insulin metabolism in the body, thereby improving the nutrient availability and reproductive hormone functions in pig.<br><br>Boar Power Max has a vegetable flavor and high quality yeast cultures as key ingredients, thus enhancing palatability.<br><br>For boar, 4 pieces of cookies (100g) to be mixed in feeds from the start of breeding is recommended.",
            },
            {
              id: "2",
              title: "Benefits of Boar Power Max<sup class='size-14'>®</sup>",
              list: [
                "Boar Power Max relieves stress, increases libido, sperm production and its vitality, reduces number of abnormal sperm, maintains body shape and prolongs economic life.",
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

export default BoarPowerMax;
