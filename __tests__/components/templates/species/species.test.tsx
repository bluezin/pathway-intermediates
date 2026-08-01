import { render } from "@testing-library/react";
import SpeciesTemplate from "@/components/templates/species";
import {
  SPECIES_LINKS,
  expectAllHrefsToMatch,
  expectHrefsToContain,
  getLinkHrefs,
} from "../../../utils/test-utils";

describe("SpeciesTemplate", () => {
  it("renders one card link per species", () => {
    render(<SpeciesTemplate />);

    const hrefs = getLinkHrefs();
    expect(hrefs.length).toBeGreaterThanOrEqual(SPECIES_LINKS.length);
    expectHrefsToContain(...SPECIES_LINKS);
  });

  it("links only to species pages", () => {
    render(<SpeciesTemplate />);

    expectAllHrefsToMatch(/^\/species\//);
  });
});
