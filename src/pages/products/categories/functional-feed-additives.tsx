import Head from "@/components/atoms/head";
import Header from "@/components/organisms/header";
import CategoriesOption from "@/components/templates/products/components/categories-option";

const FunctionalFeedAdditives = () => {
  return (
    <>
      <Head
        title="Functional Feed Additives"
        description="Functional Feed Additives"
      />

      <Header
        banner="/images/banners/products/spices.webp"
        title="lorem impsu"
      />

      <CategoriesOption
        title="Functional Feed Additives"
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
            link: "/products/mycosecure",
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
