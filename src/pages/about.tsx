import Header from "@/components/organisms/header";
import AboutTemplate from "@/components/templates/about";

const About = () => {
  return (
    <>
      <Header
        banner="/images/banners/banner-about.webp"
        title="<p style='font-size: 31px; padding-right: 160px'>We are</p>Pathway"
      />

      <AboutTemplate />
    </>
  );
};

export default About;
