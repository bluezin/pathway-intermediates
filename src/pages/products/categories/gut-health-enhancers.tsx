import Header from "@/components/organisms/header";
import CategoriesOption from "@/components/templates/products/components/categories-option";

const GutHealthEnhancers = () => {
  return (
    <>
      <Header
        banner="/images/banners/products/grains.webp"
        title="Gut Health Enhancers"
      />

      <CategoriesOption
        title="Gut Health Enhancers"
        data={[
          {
            imgForTitle: "/images/products/logos2/yeaMune.webp",
            link: "/products/yea-mune-up",
            id: "1",
            description:
              "YeaMune-UP is an one-of-a-kind immune accelerator produced with <span class='italic'>S.c. boulardii.</span> It is a highly effective immune accelerator rich in β-glucan, mannan-oligosaccharides (MOS) and abundant nutrients.",
          },
          {
            imgForTitle: "/images/products/logos2/qLife.webp",
            link: "/products/q-life",
            id: "2",
            description:
              "Q-Life is a natural alternative solution to anticoccidials with proven results for coccidiosis control and animal growth improvement. It contains phytogenic ingredients that have been carefully selected and tested by Pathway Intermediates.",
          },
          {
            imgForTitle: "/images/products/logos2/nu-fex.webp",
            link: "/products/nu-fex",
            id: "3",
            description: "nu-fex",
          },
        ]}
      />
    </>
  );
};

export default GutHealthEnhancers;
