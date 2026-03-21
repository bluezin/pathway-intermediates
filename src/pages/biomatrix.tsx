import Head from "@/components/atoms/head";
import Header from "@/components/organisms/header";
import BiomatrixTemplate from "@/components/templates/biomatrix";

const Biomatrix = () => {
  return (
    <>
      <Head title="BioMatrix" description="BioMatrix" />

      <Header
        banner="/images/banners/banner-biomatrix.webp"
        title="BioMatrix"
      />
      <BiomatrixTemplate />
    </>
  );
};

export default Biomatrix;
