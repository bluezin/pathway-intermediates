import Head from "@/components/atoms/head";
import Header from "@/components/organisms/header";
import ProductsTemplate from "@/components/templates/products";

const Products = () => {
  return (
    <>
      <Head title="Products" description="Products" />
      <Header banner="/images/banners/banner-products.webp" title="Products" />
      <ProductsTemplate />
    </>
  );
};

export default Products;
