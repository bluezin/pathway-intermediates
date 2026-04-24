import Seo from "@/components/atoms/seo";
import Header from "@/components/organisms/header";
import MissionAndVisionTemplate from "@/components/templates/mission&vision";

const MissionAndVision = () => {
  return (
    <>
      <Seo
        title="Mission & Vision - Pathway"
        description="Discover our mission and vision focused on delivering value-added solutions for the future of animal nutrition through precision, innovation, and sustainability."
      />

      <Header
        banner="/images/banners/banner-mission.png"
        title="Mision & Vision"
      />

      <MissionAndVisionTemplate />
    </>
  );
};

export default MissionAndVision;
