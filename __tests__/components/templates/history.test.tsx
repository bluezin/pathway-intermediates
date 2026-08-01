import { render, screen } from "@testing-library/react";
import HistoryTemplate from "@/components/templates/history";

describe("HistoryTemplate", () => {
  it("renders a timeline with one year per milestone", () => {
    const { container } = render(<HistoryTemplate />);

    expect(screen.getAllByRole("heading", { level: 2 })).toHaveLength(1);

    const years = container.querySelectorAll('[class*="year"]');
    const texts = container.querySelectorAll('[class*="text"]');

    expect(years.length).toBeGreaterThan(0);
    expect(years.length).toBe(texts.length);

    years.forEach((el) => expect(el.textContent!.trim()).toBeTruthy());
    texts.forEach((el) => expect(el.textContent!.trim()).toBeTruthy());
  });
});
