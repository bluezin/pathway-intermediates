import Header from "@/components/organisms/header";
import ProductOptions from "@/components/templates/products/components/products-option";

const GrowMax = () => {
  return (
    <>
      <Header
        banner="/banners/products/natural.webp"
        title="Natural Growth Promoters"
      />

      <ProductOptions
        item={{
          subTitle: "THE ORGANIC CHROMIUM FOR ANIMAL PERFORMANCE",
          imgForTitle: "/products/logos/grow-max-logo.webp",
          content: [
            {
              id: "1",
              description:
                "There are issues directly related to pig farming productivity and in turn, the profits of the farm have yet to be solved. Some of those issues are excessive fat accumulation, low breeding rate, and stress due to low or high temperatures.<br><br>GrowMax is a product made of chromium picolinate. It plays a role in activating insulin metabolism by producing chromium in the body, which is a component of the glucose tolerance factor. Chromium binding protein binds to the insulin receptors and activates them so that blood sugar levels can be stabilized. This improves the breeding efficiency of sows by increasing the secretions of LH and FSH, therefore improving both ovulation rates and embryo survival rates. Activation of insulin contributes not only to the maintenance of blood glucose levels, but also to the metabolism of amino acids and fats, thereby preventing decrease in productivity due to stress related causes. In addition, high level cortisol caused by stress can increase fat accumulation. Chromium can prevent excessive accumulation of fat by decreasing cortisol levels in blood.<br><br>Chromium picolinate, a component of GrowMax, is the only organic chromium that has been approved by the United States FDA for its safety. In addition, its effect has been verified in numerous studies. Also, the stability of GrowMax is excellent due to thorough quality control during the manufacturing process.",
            },
            {
              id: "2",
              title: "Benefits of Growmax™",
              list: [
                "GrowMax activates insulin metabolism, improves reproductive performance, and reduces stress and mortality rates.",
              ],
            },
            {
              id: "3",
              description:
                "For more information and application advice, please use the contact form to reach your Pathway Intermediates representative.",
            },
          ],
        }}
      />
    </>
  );
};

export default GrowMax;
