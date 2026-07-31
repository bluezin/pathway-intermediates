import { render, screen } from "@testing-library/react";
import BioMatrixTemplate from "@/components/templates/bio-matrix";

describe("BioMatrixTemplate", () => {
  it("renders one external link per site", () => {
    render(<BioMatrixTemplate />);

    const hrefs = screen
      .getAllByRole("link")
      .map((link) => link.getAttribute("href"));
    expect(hrefs).toHaveLength(2);
    expect(hrefs).toContain("https://www.pathway-intermediates.com/");
    expect(hrefs).toContain("https://www.biomatrixintl.com/");
  });

  it("renders a logo image per card", () => {
    render(<BioMatrixTemplate />);

    const imgs = screen.getAllByRole("img");
    expect(imgs).toHaveLength(2);
    imgs.forEach((img) => expect(img.getAttribute("alt")).toBeTruthy());
  });
});
