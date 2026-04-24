import Seo from "@/components/atoms/seo";
import Header from "@/components/organisms/header";
import MapTemplate from "@/components/templates/map";

const Map = () => {
  return (
    <>
      <Seo
        title="Map - Pathway"
        description="Visit Pathway Intermediates’ office in Rolling Meadows, Illinois."
      />
      <Header
        banner="/images/banners/banner-map.webp"
        title="Where We Are?
"
      />
      <MapTemplate />;
    </>
  );
};

export default Map;
