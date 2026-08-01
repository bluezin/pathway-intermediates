import { render, screen } from "@testing-library/react";
import AcceleratorSolutions from "@/pages/products/categories/accelerator-solutions";
import FunctionalFeedAdditives from "@/pages/products/categories/functional-feed-additives";
import GutHealthEnhancers from "@/pages/products/categories/gut-health-enhancers";
import { getLinkHrefs } from "../utils/test-utils";

describe.each([
  [
    "Accelerator Solutions",
    AcceleratorSolutions,
    ["/products/lipidol-prime", "/products/lipidol-protect", "/products/endopower"],
  ],
  [
    "Functional Feed Additives",
    FunctionalFeedAdditives,
    ["/products/gromega", "/products/enncinate", "/products/mycosecure", "/products/probe-bac"],
  ],
  [
    "Gut Health Enhancers",
    GutHealthEnhancers,
    ["/products/yea-mune-up", "/products/q-life", "/products/nu-fex"],
  ],
])("%s page", (title, Page, expectedLinks) => {
  it("renders the category title", () => {
    render(<Page />);

    expect(screen.getAllByText(title).length).toBeGreaterThanOrEqual(1);
  });

  it("renders one card link per product", () => {
    render(<Page />);

    const hrefs = getLinkHrefs();
    for (const link of expectedLinks) {
      expect(hrefs).toContain(link);
    }
  });
});
