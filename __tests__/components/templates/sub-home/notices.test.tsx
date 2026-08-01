import { render, screen } from "@testing-library/react";
import Notices from "@/components/templates/sub-home/components/notices";

describe("Notices", () => {
  it("renders the news and events sections", () => {
    const { container } = render(<Notices />);

    expect(
      container.querySelectorAll('[class*="content__container__items"] > div'),
    ).toHaveLength(3);

    const imgs = screen.getAllByRole("img");
    expect(imgs).toHaveLength(3);
    imgs.forEach((img) => expect(img.getAttribute("alt")).toBeTruthy());
  });
});
