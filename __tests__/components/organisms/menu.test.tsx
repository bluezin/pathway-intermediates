import { fireEvent, render, screen } from "@testing-library/react";
import Menu from "@/components/organisms/nav/components/menu";
import { getAnchorHrefs } from "../../utils/test-utils";

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

    const hrefs = getAnchorHrefs(container);
    expect(hrefs).toContain("/bio-matrix");
  });

  it("closes the menu when Contact Us is clicked", () => {
    const setOpenMenu = jest.fn();
    renderMenu({ setOpenMenu });

    fireEvent.click(screen.getByText("Contact Us"));

    expect(setOpenMenu).toHaveBeenCalledWith(false);
  });

  it("uses the mobile links on small screens", () => {
    Object.defineProperty(window, "innerWidth", {
      value: 700,
      configurable: true,
      writable: true,
    });

    const { container } = renderMenu();

    const hrefs = getAnchorHrefs(container);
    expect(hrefs).toContain("#");
    expect(hrefs).toContain("/bio-matrix");
    expect(hrefs).toContain("#contact-form");

    Object.defineProperty(window, "innerWidth", {
      value: 1024,
      configurable: true,
      writable: true,
    });
  });
});
