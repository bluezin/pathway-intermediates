import Head from "@/components/atoms/head";
import Header from "@/components/organisms/header";
import BiometrixTemplate from "@/components/templates/biometrix";

const Biometrix = () => {
  return (
    <>
      <Head title="Biometrix" description="Biometrix" />

      <Header
        banner="/images/banners/banner-biometrix.webp"
        title="Biometrix"
      />
      <BiometrixTemplate />
    </>
  );
};

export default Biometrix;
