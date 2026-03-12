import Header from "@/components/organisms/header";
import ProductOptions from "@/components/templates/products/components/products-option";

const Coccilock = () => {
  return (
    <>
      <Header
        banner="/banners/products/grains.webp"
        title="Gut Health Enhancers"
      />

      <ProductOptions
        item={{
          subTitle:
            "ECO-FRIENDLY PRODUCT FOR ENSURING CONSTANT GROWTH PERFORMANCE",
          imgForTitle: "/products/logos/coccilock-logo.webp",
          content: [
            {
              id: "1",
              description:
                "Coccidiosis is a protozoal disease that predominantly occurs in broilers and laying hens and is spread through the feces from infected chickens. Although antibiotics are used for treatment and prevention, there are continuous challenges such as antimicrobial resistance and residual issues with associated diseases.  As more countries are regulating the use of antibiotics in feed, the demand for natural anticoccidial additives is increasing.<br><br>CocciLock is the eco-friendly anticoccidial product which includes natural herb extract and minerals. It inhibits <span class='italic'>Eimeria</span> spiecies which cause coccidiosis, and improves gut environment thereby benefiting animals.",
            },
            {
              id: "2",
              title: "Benefits of CocciLock<sup class='size-14'>®</sup>",
              list: [
                "CocciLock improves uniformity in livestock, growth rate, feed efficiency, intestinal environment.",
                "CocciLock improves farm environment by reducing ammonia levels and odors.",
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

export default Coccilock;
