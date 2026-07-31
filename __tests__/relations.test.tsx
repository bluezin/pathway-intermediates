import { render } from "@testing-library/react";
import Relations from "@/components/templates/sub-home/components/relations";

describe("Relations", () => {
  it("renders the three section links", () => {
    const { container } = render(<Relations />);

    const hrefs = Array.from(container.querySelectorAll("a")).map((a) =>
      a.getAttribute("href"),
    );
    expect(hrefs).toHaveLength(3);
    expect(hrefs).toEqual(expect.arrayContaining(["/species", "/about", "/products"]));
  });
});
