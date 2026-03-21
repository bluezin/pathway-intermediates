import Head from "@/components/atoms/head";
import Header from "@/components/organisms/header";
import MapTemplate from "@/components/templates/map";

const Map = () => {
  return (
    <>
      <Head title="Map" description="Map" />
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
