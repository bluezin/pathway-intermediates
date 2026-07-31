import { fireEvent, render } from "@testing-library/react";
import Menu from "@/components/organisms/nav/components/menu";

const renderMenu = (overrides: Partial<Parameters<typeof Menu>[0]> = {}) => {
  const props = { openMenu: true, setOpenMenu: jest.fn(), ...overrides };
  return render(<Menu {...props} />);
};

describe("Menu", () => {
  it("renders one dropdown title per nav item", () => {
    const { container } = renderMenu();

    expect(
      container.querySelectorAll('[class*="dropdown__title"]'),
    ).toHaveLength(5);
  });

  it("shows the dropdown options when a title is clicked", () => {
    const { container } = renderMenu();

    const options = container.querySelector(
      '[class*="dropdown__options"]',
    ) as Element;
    expect(options.className).not.toContain("dropdown__options__active");

    fireEvent.click(
      container.querySelectorAll('[class*="dropdown__title"]')[0],
    );

    expect(options.className).toContain("dropdown__options__active");
  });

  it("hides the dropdown options when the title is clicked again", () => {
    const { container } = renderMenu();

    const title = container.querySelector(
      '[class*="dropdown__title"]',
    ) as Element;
    const options = container.querySelector(
      '[class*="dropdown__options"]',
    ) as Element;

    fireEvent.click(title);
    fireEvent.click(title);

    expect(options.className).not.toContain("dropdown__options__active");
  });

  it("links BioMatrix to its page", () => {
    const { container } = renderMenu();

    const hrefs = Array.from(container.querySelectorAll("a")).map((a) =>
      a.getAttribute("href"),
    );
    expect(hrefs).toContain("/bio-matrix");
  });
});
