import { render, screen } from "@testing-library/react";
import BioMatrixTemplate from "@/components/templates/bio-matrix";
import { BIOMATRIX_URL, PATHWAY_URL } from "@/constants";
import { expectHrefsToContain } from "../../utils/test-utils";

describe("BioMatrixTemplate", () => {
  it("renders one external link per site", () => {
    render(<BioMatrixTemplate />);

    const hrefs = screen
      .getAllByRole("link")
      .map((link) => link.getAttribute("href"));
    expect(hrefs).toHaveLength(2);
    expectHrefsToContain(PATHWAY_URL, BIOMATRIX_URL);
  });

  it("renders a logo image per card", () => {
    render(<BioMatrixTemplate />);

    const imgs = screen.getAllByRole("img");
    expect(imgs).toHaveLength(2);
    imgs.forEach((img) => expect(img.getAttribute("alt")).toBeTruthy());
  });
});
