import Head from "@/components/atoms/head";
import Header from "@/components/organisms/header";
import AboutTemplate from "@/components/templates/about";

const About = () => {
  return (
    <>
      <Head title="About" description="About" />

      <Header
        banner="/images/banners/banner-about.png"
        title="<p style='font-size: 31px; padding-right: 160px'>We are</p>Pathway"
      />

      <AboutTemplate />
    </>
  );
};

export default About;
