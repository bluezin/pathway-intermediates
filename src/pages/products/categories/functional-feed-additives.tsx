import Header from "@/components/organisms/header";
import CategoriesOption from "@/components/templates/products/components/categories-option";

const FunctionalFeedAdditives = () => {
  return (
    <>
      <Header
        banner="/images/banners/products/grains.webp"
        title="Accelerator Solutions"
      />

      <CategoriesOption
        title="Accelerator Solutions"
        data={[
          {
            imgForTitle: "/images/products/logos2/gromega.webp",
            link: "/products/gromega",
            id: "1",
            description: "gromega",
          },
          {
            imgForTitle: "/images/products/logos2/enncinate.webp",
            link: "/products/enncinate",
            id: "2",
            description: "enncinate",
          },
          {
            imgForTitle: "/images/products/logos2/mycoSecure.webp",
            link: "/products/mycoSecure",
            id: "3",
            description: "MycoSecure",
          },
          {
            imgForTitle: "/images/products/logos2/proBe.webp",
            link: "/products/probe-bac",
            id: "4",
            description:
              "ProBe-Bac is a mixture of bacteriophages precisely selected against specific poultry or swine disease. It effectively controls various diseases that are prevalent in poultry or swine industry.",
          },
        ]}
      />
    </>
  );
};

export default FunctionalFeedAdditives;
