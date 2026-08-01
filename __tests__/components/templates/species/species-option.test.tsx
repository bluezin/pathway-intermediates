import { render, screen } from "@testing-library/react";
import SpeciesOption from "@/components/templates/species/components/species-option";
import { SPECIES_LINKS, expectHrefsToContain, getLinkHrefs } from "../../../utils/test-utils";

const makeItem = (id: string, link: string) => ({
  id,
  link,
  description: `Description for ${id}`,
  imgForTitle: `/images/${id}.webp`,
});

const data = {
  betterDigestion: [makeItem("swine", "/species/swine")],
  boosting: [makeItem("poultry", "/species/poultry"), makeItem("ruminant", "/species/ruminant")],
  improvingGut: [makeItem("aquaculture", "/species/aquaculture")],
};

describe("SpeciesOption", () => {
  it("renders the three section titles", () => {
    render(<SpeciesOption data={data} />);

    expect(
      screen.getByText("Better Digestion & Cost Saving"),
    ).toBeInTheDocument();
    expect(screen.getByText("Boosting Performance")).toBeInTheDocument();
    expect(screen.getByText("Improving Gut Health")).toBeInTheDocument();
  });

  it("renders one card link per item across all sections", () => {
    render(<SpeciesOption data={data} />);

    const hrefs = getLinkHrefs();
    expect(hrefs).toHaveLength(4);
    expectHrefsToContain(...SPECIES_LINKS);
  });
});
