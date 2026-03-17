import Head from "@/components/atoms/head";
import Header from "@/components/organisms/header";
import HomeTempalte from "@/components/templates/home";

export default function Home() {
  return (
    <>
      <Head title="Pathway Intermediates" description="Pathway Intermediates" />
      <Header banner="/images/banners/banner-main.webp" bannerMain />
      <HomeTempalte />
    </>
  );
}
