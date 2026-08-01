import { render, screen } from "@testing-library/react";
import AboutTemplate from "@/components/templates/about";
import { expectHrefsToContain } from "../../utils/test-utils";

describe("AboutTemplate", () => {
  it("renders the main heading and the youtube video", () => {
    render(<AboutTemplate />);

    expect(screen.getAllByRole("heading", { level: 2 })).toHaveLength(1);
    expect(screen.getByTitle("YouTube video player")).toBeInTheDocument();
  });

  it("links to the employee spotlight page and shows member images", () => {
    render(<AboutTemplate />);

    expectHrefsToContain("/employee-spotlight");

    const imgs = screen.getAllByRole("img");
    expect(imgs.length).toBeGreaterThan(0);
    imgs.forEach((img) => expect(img.getAttribute("alt")).toBeTruthy());
  });
});
