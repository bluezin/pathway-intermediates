import Seo from "@/components/atoms/seo";
import Header from "@/components/organisms/header";
import HomeTempalte from "@/components/templates/home";

export default function Home() {
  return (
    <>
      <Seo
        title="Home - Pathway"
        description="Learn about Pathway Intermediates, a research-driven animal nutrition company delivering innovative feed additive solutions through advanced R&D and global expertise."
      />
      <Header banner="/images/banners/banner-main.webp" bannerMain />
      <HomeTempalte />
    </>
  );
}
