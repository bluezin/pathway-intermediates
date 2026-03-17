import Head from "@/components/atoms/head";
import Header from "@/components/organisms/header";
import HistoryTemplate from "@/components/templates/history";

const History = () => {
  return (
    <>
      <Head title="History" description="History" />

      <Header banner="/images/banners/banner-history.png" title="History" />
      <HistoryTemplate />
    </>
  );
};

export default History;
