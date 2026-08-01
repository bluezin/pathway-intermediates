import { render, screen } from "@testing-library/react";
import Footer from "@/components/templates/footer";

describe("Footer", () => {
  it("renders the current year in the copyright", () => {
    render(<Footer />);

    expect(
      screen.getByText(new RegExp(String(new Date().getFullYear()))),
    ).toBeInTheDocument();
  });

  it("renders the footer logo", () => {
    render(<Footer />);

    expect(
      screen.getByAltText("Pathway Intermediates logo"),
    ).toBeInTheDocument();
  });
});
