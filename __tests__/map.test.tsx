import { render, screen } from "@testing-library/react";
import MapTemplate from "@/components/templates/map";

describe("MapTemplate", () => {
  it("renders the section title and the google maps iframe", () => {
    render(<MapTemplate />);

    expect(screen.getAllByRole("heading", { level: 2 })).toHaveLength(1);
    expect(screen.getByTitle("map")).toBeInTheDocument();
  });

  it("renders the office address", () => {
    const { container } = render(<MapTemplate />);

    const informative = container.querySelector(
      '[class*="informative__text"]',
    );
    expect(informative).toBeInTheDocument();
    expect(informative!.textContent!.trim()).toBeTruthy();
  });
});
