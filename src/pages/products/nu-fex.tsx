import Seo from "@/components/atoms/seo";
import Header from "@/components/organisms/header";
import ProductOptions from "@/components/templates/products/components/products-option";

const NuFex = () => {
  return (
    <>
      <Seo title="NuFex - Pathway" description="" />

      <Header
        banner="/images/banners/products/grains.webp"
        title="Gut Health Enhancers"
      />

      <ProductOptions
        titleOfProduct="NuFex"
        item={{
          subTitle: "subtitle",
          imgForTitle: "/images/products/logos/nu-fex.webp",
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

export default NuFex;
