import { render, screen } from "@testing-library/react";
import MissionAndVisionTemplate from "@/components/templates/mission&vision";

describe("MissionAndVisionTemplate", () => {
  it("renders two section headings", () => {
    render(<MissionAndVisionTemplate />);

    expect(screen.getAllByRole("heading", { level: 2 })).toHaveLength(2);
  });

  it("renders a non-empty description per section", () => {
    const { container } = render(<MissionAndVisionTemplate />);

    const descriptions = container.querySelectorAll('[class*="description"]');
    expect(descriptions).toHaveLength(2);
    descriptions.forEach((el) => expect(el.textContent!.trim()).toBeTruthy());
  });
});
