import Seo from "@/components/atoms/seo";
import Header from "@/components/organisms/header";
import ProductOptions from "@/components/templates/products/components/products-option";

const Mycosecure = () => {
  return (
    <>
      <Seo title="MycoSecure - Pathway" description="" />

      <Header
        banner="/images/banners/products/spices.webp"
        title="Functional Feed Additives"
      />

      <ProductOptions
        item={{
          subTitle: "subtitle",
          imgForTitle: "/images/products/logos/mycosecure.webp",
          linkVideo: "link",
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

export default Mycosecure;
