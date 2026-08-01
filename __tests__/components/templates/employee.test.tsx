import { render, screen } from "@testing-library/react";
import EmployeeTemplate from "@/components/templates/employee";

describe("EmployeeTemplate", () => {
  it("renders a single page heading", () => {
    render(<EmployeeTemplate />);

    expect(screen.getAllByRole("heading", { level: 2 })).toHaveLength(1);
  });

  it("renders one unique photo per employee", () => {
    render(<EmployeeTemplate />);

    const imgs = screen.getAllByRole("img");
    expect(imgs.length).toBeGreaterThan(0);

    const alts = imgs.map((img) => img.getAttribute("alt"));
    expect(new Set(alts).size).toBe(imgs.length);
    imgs.forEach((img) => expect(img.getAttribute("alt")).toBeTruthy());
  });

  it("renders a location marker per region", () => {
    const { container } = render(<EmployeeTemplate />);

    expect(container.querySelectorAll('[class*="place"]')).toHaveLength(7);
  });
});
