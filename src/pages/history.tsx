import Seo from "@/components/atoms/seo";
import Header from "@/components/organisms/header";
import HistoryTemplate from "@/components/templates/history";

const History = () => {
  return (
    <>
      <Seo
        title="History - Pathway"
        description="Explore the history of Pathway Intermediates, from its foundation to global expansion and key company milestones."
      />

      <Header banner="/images/banners/banner-history.webp" title="History" />
      <HistoryTemplate />
    </>
  );
};

export default History;
