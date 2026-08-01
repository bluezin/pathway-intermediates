import { render, screen } from "@testing-library/react";
import Species from "@/pages/species";
import Swine from "@/pages/species/swine";
import Poultry from "@/pages/species/poultry";
import Ruminant from "@/pages/species/ruminant";
import Aquaculture from "@/pages/species/aquaculture";
import {
  SPECIES_LINKS,
  expectHeroHeading,
  expectHrefsToContain,
  getLinkHrefs,
} from "../utils/test-utils";

describe("Species page", () => {
  it("renders its hero heading", () => {
    render(<Species />);

    expectHeroHeading("Species");
  });

  it("renders one card link per species", () => {
    render(<Species />);

    expectHrefsToContain(...SPECIES_LINKS);
  });
});

describe.each([
  ["Swine", Swine, ["/products/endopower", "/products/endophos", "/products/boar-power-max"]],
  [
    "Poultry",
    Poultry,
    ["/products/coccilock", "/products/q-life", "/products/probe-bac"],
  ],
  ["Ruminant", Ruminant, ["/products/lipidol", "/products/thermo-rex", "/products/yea-mune-up"]],
  ["Aquaculture", Aquaculture, ["/products/fermkito", "/products/endophos"]],
])("%s page", (name, Page, expectedLinks) => {
  it("renders the three product group titles", () => {
    render(<Page />);

    expect(
      screen.getByText("Better Digestion & Cost Saving"),
    ).toBeInTheDocument();
    expect(screen.getByText("Boosting Performance")).toBeInTheDocument();
    expect(screen.getByText("Improving Gut Health")).toBeInTheDocument();
  });

  it("renders the product links", () => {
    render(<Page />);

    const hrefs = getLinkHrefs();
    for (const link of expectedLinks) {
      expect(hrefs).toContain(link);
    }
  });
});
