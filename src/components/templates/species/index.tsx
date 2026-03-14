import BasePage from "../base-page";

const SpeciesTemplate = () => {
  return (
    <>
      <BasePage
        description="Our solutions are continuously being researched at leading universities
        and research institutes, and the feed product development team and farm
        research teams are constantly monitoring our products. We focus our
        energies on continually seeking where our expertise is best spent,
        listening and assisting our customers, providing them with solutions
        where they are needed."
        title="Pathway Species"
        listCards={[
          {
            link: "/species/swine",
            title: "Swine",
            id: "swine",
            bannerUrl: "/images/banners/species/swine.webp",
          },
          {
            link: "/species/poultry",
            title: "Poultry",
            id: "poultry",
            bannerUrl: "/images/banners/species/poultry.webp",
          },
          {
            link: "/species/ruminant",
            title: "Ruminant",
            id: "ruminant",
            bannerUrl: "/images/banners/species/ruminant.webp",
          },
          {
            link: "/species/aquaculture",
            title: "Aquaculture",
            id: "aquaculture",
            bannerUrl: "/images/banners/species/aquaculture.webp",
          },
        ]}
      />
    </>
  );
};

export default SpeciesTemplate;
