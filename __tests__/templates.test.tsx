import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Notices from "@/components/templates/sub-home/components/notices";
import Card from "@/components/molecules/card";
import HomeMainTemplate from "@/components/templates/home-main";

describe("Notices", () => {
  it("renders the news and events sections", () => {
    const { container } = render(<Notices />);

    expect(
      container.querySelectorAll(
        '[class*="content__container__items"] > div',
      ),
    ).toHaveLength(3);

    const imgs = screen.getAllByRole("img");
    expect(imgs).toHaveLength(3);
    imgs.forEach((img) => expect(img.getAttribute("alt")).toBeTruthy());
  });
});

describe("Card", () => {
  const item = {
    link: "/species/swine",
    id: "1",
    description: "Best <b>swine</b> solutions",
    imgForTitle: "/images/swine.webp",
  };

  it("renders the card as a link with an image and content", () => {
    render(<Card item={item} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/species/swine");
    expect(link.querySelector("img")).toBeInTheDocument();
    expect(link.textContent!.trim()).toBeTruthy();
  });
});

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

    expect(window.open).toHaveBeenCalledWith(
      "https://www.biomatrixintl.com/",
      "_blank",
    );
  });
});
