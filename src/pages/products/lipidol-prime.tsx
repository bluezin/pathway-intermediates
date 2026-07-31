import Seo from "@/components/atoms/seo";
import Header from "@/components/organisms/header";
import ProductOptions from "@/components/templates/products/components/products-option";

const LipidolPrime = () => {
  return (
    <>
      <Seo title="LipidolPrime - Pathway" description="" />

      <Header
        banner="/images/banners/products/condiments.webp"
        title="Accelerator Solutions"
      />

      <ProductOptions
        titleOfProduct="LipidolPrime"
        item={{
          subTitle: "subtitle",
          imgForTitle: "/images/products/logos/lipidol-prime.webp",
          linkVideo: "",
          content: [
            {
              id: "1",
              title: "title",
              description: "description",
            },
          ],
        }}
      />
    </>
  );
};

export default LipidolPrime;
