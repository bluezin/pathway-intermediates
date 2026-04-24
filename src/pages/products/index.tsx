import Seo from "@/components/atoms/seo";
import Header from "@/components/organisms/header";
import ProductsTemplate from "@/components/templates/products";

const Products = () => {
  return (
    <>
      <Seo title="Products - Pathway" description="" />
      <Header banner="/images/banners/banner-products.webp" title="Products" />
      <ProductsTemplate />
    </>
  );
};

export default Products;
