import Header from "@/components/organisms/header";
import CategoriesOption from "@/components/templates/products/components/categories-option";

const AcceleratorSolutions = () => {
  return (
    <>
      <Header
        banner="/images/banners/products/condiments.webp"
        title="Accelerator Solutions"
      />

      <CategoriesOption
        title="Accelerator Solutions"
        data={[
          {
            imgForTitle: "/images/products/logos2/lipidol-prime.webp",
            link: "/products/lipidol-prime",
            id: "1",
            description: "lipidol-prime",
          },
          {
            imgForTitle: "/images/products/logos2/lipidol-protect.webp",
            link: "/products/lipidol-protect",
            id: "2",
            description: "lipidol-protect",
          },
          {
            imgForTitle: "/images/products/logos2/endopower.webp",
            link: "/products/endopower",
            id: "3",
            description:
              "Endo-Power is powerful digestion accelerator. It contains optimal enzymes for corn-soybean meal based diet, targeting NSPs for accelerated hydrolyzation.",
          },
        ]}
      />
    </>
  );
};

export default AcceleratorSolutions;
