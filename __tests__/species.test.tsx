import { render, screen } from "@testing-library/react";
import SpeciesTemplate from "@/components/templates/species";

describe("SpeciesTemplate", () => {
  it("renders one card link per species", () => {
    render(<SpeciesTemplate />);

    const hrefs = screen
      .getAllByRole("link")
      .map((link) => link.getAttribute("href"));
    expect(hrefs).toHaveLength(4);
    expect(hrefs).toEqual(
      expect.arrayContaining([
        "/species/swine",
        "/species/poultry",
        "/species/ruminant",
        "/species/aquaculture",
      ]),
    );
  });
});
