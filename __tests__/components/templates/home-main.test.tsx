import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HomeMainTemplate from "@/components/templates/home-main";
import { BIOMATRIX_URL } from "@/constants";

describe("HomeMainTemplate", () => {
  beforeEach(() => {
    (window.open as jest.Mock).mockClear();
  });

  it("opens the pathway home page from the first button", async () => {
    const user = userEvent.setup();
    render(<HomeMainTemplate />);

    await user.click(screen.getAllByRole("button")[0]);

    expect(window.open).toHaveBeenCalledWith(
      `${window.location.origin}/home`,
      "_blank",
    );
  });

  it("opens the biomatrix site from the second button", async () => {
    const user = userEvent.setup();
    render(<HomeMainTemplate />);

    await user.click(screen.getAllByRole("button")[1]);

    expect(window.open).toHaveBeenCalledWith(BIOMATRIX_URL, "_blank");
  });
});
