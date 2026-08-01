import { render, screen } from "@testing-library/react";
import ProductsTemplate from "@/components/templates/products";
import {
  CATEGORY_LINKS,
  expectAllHrefsToMatch,
  expectHrefsToContain,
  getLinkHrefs,
} from "../../../utils/test-utils";

describe("ProductsTemplate", () => {
  it("renders the page title", () => {
    render(<ProductsTemplate />);

    expect(
      screen.getByRole("heading", { name: "Pathway Products" }),
    ).toBeInTheDocument();
  });

  it("renders one link per product category", () => {
    render(<ProductsTemplate />);

    const hrefs = getLinkHrefs();
    expect(hrefs.length).toBeGreaterThanOrEqual(CATEGORY_LINKS.length);
    expectHrefsToContain(...CATEGORY_LINKS);
  });

  it("links only to category pages", () => {
    render(<ProductsTemplate />);

    expectAllHrefsToMatch(/^\/products\/categories\//);
  });

  it("shows every category title", () => {
    render(<ProductsTemplate />);

    for (const category of [
      "Accelerator Solutions",
      "Gut Health Enhancers",
      "Functional Feed Additives",
    ]) {
      expect(
        screen.getByRole("heading", { name: category }),
      ).toBeInTheDocument();
    }
  });
});
