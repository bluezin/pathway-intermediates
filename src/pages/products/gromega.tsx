import Seo from "@/components/atoms/seo";
import Header from "@/components/organisms/header";
import ProductOptions from "@/components/templates/products/components/products-option";

const Gromega = () => {
  return (
    <>
      <Seo title="Gromega - Pathway" description="" />

      <Header
        banner="/images/banners/products/spices.webp"
        title="Functional Feed Additives"
      />

      <ProductOptions
        titleOfProduct="Gromega"
        item={{
          subTitle: "subtitle",
          imgForTitle: "/images/products/logos/gromega.webp",
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

export default Gromega;
