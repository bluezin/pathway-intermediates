import { render, screen } from "@testing-library/react";
import BasePage from "@/components/templates/base-page";

const listCards = [
  {
    title: "Swine",
    link: "/species/swine",
    id: "swine",
    bannerUrl: "/images/banner.webp",
  },
  {
    title: "Poultry",
    link: "/species/poultry",
    id: "poultry",
    bannerUrl: "/images/banner.webp",
  },
];

describe("BasePage", () => {
  it("renders one link per card", () => {
    render(
      <BasePage
        title="Pathway Species"
        description="Our solutions"
        listCards={listCards}
      />,
    );

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(listCards.length);

    const hrefs = links.map((link) => link.getAttribute("href"));
    for (const card of listCards) {
      expect(hrefs).toContain(card.link);
    }
  });

  it("renders a banner background per card", () => {
    const { container } = render(
      <BasePage
        title="Pathway Species"
        description="Our solutions"
        listCards={listCards}
      />,
    );

    expect(
      container.querySelectorAll('[class*="container__link__banner"]'),
    ).toHaveLength(listCards.length);
  });
});
