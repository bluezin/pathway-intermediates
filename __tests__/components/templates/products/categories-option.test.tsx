import { render, screen } from "@testing-library/react";
import CategoriesOption from "@/components/templates/products/components/categories-option";
import { Specie } from "@/components/types";
import { getLinkHrefs } from "../../../utils/test-utils";

const data: Specie[] = [
  {
    link: "/products/endophos",
    id: "endophos",
    description: "The highly effective phytase",
    imgForTitle: "/images/products/logos/endophos-logo.webp",
  },
  {
    link: "/products/q-life",
    id: "q-life",
    description: "Gut health support",
    imgForTitle: "/images/products/logos/q-life-logo.webp",
  },
];

describe("CategoriesOption", () => {
  it("renders the section title", () => {
    render(<CategoriesOption title="Accelerator Solutions" data={data} />);

    expect(
      screen.getByText("Accelerator Solutions"),
    ).toBeInTheDocument();
  });

  it("renders one card link per item", () => {
    render(<CategoriesOption title="Accelerator Solutions" data={data} />);

    const hrefs = getLinkHrefs();
    expect(hrefs).toEqual(["/products/endophos", "/products/q-life"]);
  });

  it("renders a logo image per item", () => {
    render(<CategoriesOption title="Accelerator Solutions" data={data} />);

    const imgs = screen.getAllByRole("img");
    expect(imgs).toHaveLength(2);
  });
});
