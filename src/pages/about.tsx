import Seo from "@/components/atoms/seo";
import Header from "@/components/organisms/header";
import AboutTemplate from "@/components/templates/about";

const About = () => {
  return (
    <>
      <Seo
        title="About - Pathway"
        description="Learn about Pathway Intermediates, a research-driven animal nutrition company delivering innovative feed additive solutions through advanced R&D and global expertise."
      />

      <Header
        banner="/images/banners/banner-about.webp"
        title="<p style='font-size: 31px; padding-right: 160px'>We are</p>Pathway"
      />

      <AboutTemplate />
    </>
  );
};

export default About;
