import { render, screen } from "@testing-library/react";
import Card from "@/components/molecules/card";

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
