import Head from "@/components/atoms/head";
import Header from "@/components/organisms/header";
import MissionAndVisionTemplate from "@/components/templates/mission&vision";

const MissionAndVision = () => {
  return (
    <>
      <Head title="Mission & Vision" description="Mission & Vision" />

      <Header
        banner="/images/banners/banner-mission.png"
        title="Mision & Vision"
      />

      <MissionAndVisionTemplate />
    </>
  );
};

export default MissionAndVision;
