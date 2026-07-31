import { render, screen } from "@testing-library/react";
import ProductsOption from "@/components/templates/products/components/products-option";

const item = {
  subTitle: "THE HIGHLY EFFECTIVE PHYTASE",
  imgForTitle: "/images/products/logos/endophos-logo.webp",
  content: [
    {
      id: "1",
      title: "Overview",
      description: "Best phytase in the market",
      list: ["High stability", "Cost effective"],
    },
    { id: "2", description: "Plain description without title" },
  ],
};

describe("ProductsOption", () => {
  it("renders the product logo", () => {
    render(<ProductsOption item={item} titleOfProduct="Endo-Phos" />);

    expect(screen.getByAltText("Endo-Phos")).toBeInTheDocument();
  });

  it("renders a block per content entry with its list", () => {
    const { container } = render(
      <ProductsOption item={item} titleOfProduct="Endo-Phos" />,
    );

    expect(
      container.querySelector('[class*="content__title"]'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('[class*="content__description"]'),
    ).toBeInTheDocument();
    expect(container.querySelectorAll("ul li")).toHaveLength(2);
  });
});
