import Seo from "@/components/atoms/seo";
import Header from "@/components/organisms/header";
import BioMatrixTemplate from "@/components/templates/bio-matrix";

const BioMatrix = () => {
  return (
    <>
      <Seo title="BioMatrix" description="lorem ipsum" />

      <Header
        banner="/images/banners/banner-biomatrix.webp"
        title="BioMatrix"
      />
      <BioMatrixTemplate />
    </>
  );
};

export default BioMatrix;
