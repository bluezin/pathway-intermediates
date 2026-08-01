import { fireEvent, render, screen } from "@testing-library/react";
import Nav from "@/components/organisms/nav";

describe("Nav", () => {
  beforeEach(() => {
    window.scrollY = 0;
    jest.clearAllMocks();
  });

  it("renders the logo and the mobile menu button", () => {
    render(<Nav />);

    expect(screen.getByAltText("Pathway logo")).toBeInTheDocument();

    const button = screen.getByRole("button", { name: "Open menu" });
    expect(button).toHaveAttribute("aria-expanded", "false");
    expect(button).toHaveAttribute("aria-controls", "menu");
  });

  it("opens the menu when the button is clicked", () => {
    render(<Nav />);

    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));

    const closeButton = screen.getByRole("button", { name: "Close menu" });
    expect(closeButton).toHaveAttribute("aria-expanded", "true");
    expect(document.body.classList.contains("scroll-hidden")).toBe(true);
  });

  it("closes the menu when the button is clicked again", () => {
    render(<Nav />);

    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    fireEvent.click(screen.getByRole("button", { name: "Close menu" }));

    expect(screen.getByRole("button", { name: "Open menu" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
    expect(document.body.classList.contains("scroll-hidden")).toBe(false);
  });

  it("adds the scroll background after scrolling", () => {
    render(<Nav />);

    const nav = screen.getByRole("navigation");
    expect(nav.className).not.toContain("nav__scroll");

    window.scrollY = 200;
    fireEvent.scroll(window);

    expect(nav.className).toContain("nav__scroll");
  });
});
