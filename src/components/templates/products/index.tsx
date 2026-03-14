import BasePage from "../base-page";

const ProductsTemplate = () => {
  return (
    <>
      <BasePage
        title="Pathway Products"
        listCards={[
          {
            title: "Accelerator Solutions",
            id: "accelerator-solutions",
            link: "/products/categories/accelerator-solutions",
            bannerUrl: "/images/banners/products/condiments.webp",
          },
          {
            title: "Gut Health Enhancers",
            id: "gut-health-enhancers",
            link: "/products/categories/gut-health-enhancers",
            bannerUrl: "/images/banners/products/grains.webp",
          },
          {
            title: "Functional Feed Additives",
            id: "functional-feed-additives",
            link: "/products/categories/functional-feed-additives",
            bannerUrl: "/images/banners/products/grains.webp",
          },
        ]}
        description="lorem Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
      />
    </>
  );
};

export default ProductsTemplate;
