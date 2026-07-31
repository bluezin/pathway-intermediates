import { render, screen } from "@testing-library/react";
import Footer from "@/components/templates/footer";
import Social from "@/components/organisms/nav/components/social";

describe("Footer", () => {
  it("renders the current year in the copyright", () => {
    render(<Footer />);

    expect(
      screen.getByText(new RegExp(String(new Date().getFullYear()))),
    ).toBeInTheDocument();
  });

  it("renders the footer logo", () => {
    render(<Footer />);

    expect(screen.getByAltText("Pathway Intermediates logo")).toBeInTheDocument();
  });
});

describe("Social", () => {
  it("renders the social links with the right urls", () => {
    const { container } = render(<Social />);

    const hrefs = Array.from(container.querySelectorAll("a")).map((a) =>
      a.getAttribute("href"),
    );
    expect(hrefs).toContain(
      "https://www.facebook.com/Pathway.Intermediates.global/",
    );
    expect(hrefs).toContain(
      "https://www.linkedin.com/company/pathway-intermediates/",
    );
  });
});
