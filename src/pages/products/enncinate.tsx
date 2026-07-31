import Seo from "@/components/atoms/seo";
import Header from "@/components/organisms/header";
import ProductOptions from "@/components/templates/products/components/products-option";

const Enncinate = () => {
  return (
    <>
      <Seo title="Enncinate - Pathway" description="" />

      <Header
        banner="/images/banners/products/spices.webp"
        title="Functional Feed Additives"
      />

      <ProductOptions
        titleOfProduct="Enncinate"
        item={{
          subTitle: "subtitle",
          imgForTitle: "/images/products/logos/enncinate.webp",
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

export default Enncinate;
