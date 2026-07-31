import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "@/components/organisms/header";
import { BIOMATRIX_URL, PATHWAY_URL } from "@/constants";

const getHeroButtons = () =>
  screen
    .getAllByRole("button")
    .filter((btn) => !btn.hasAttribute("aria-label"));

describe("Header", () => {
  beforeEach(() => {
    (window.open as jest.Mock).mockClear();
  });

  it("renders a title heading", () => {
    render(<Header banner="/images/banner.webp" title="Products" />);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders two hero buttons when bannerMain is true", () => {
    render(<Header banner="/images/banner.webp" bannerMain />);

    expect(getHeroButtons()).toHaveLength(2);
  });

  it("opens the correct sites from the hero buttons", async () => {
    const user = userEvent.setup();
    render(<Header banner="/images/banner.webp" bannerMain />);

    const buttons = getHeroButtons();

    await user.click(buttons[0]);
    expect(window.open).toHaveBeenCalledWith(PATHWAY_URL, "_blank");

    await user.click(buttons[1]);
    expect(window.open).toHaveBeenCalledWith(BIOMATRIX_URL, "_blank");
  });
});
