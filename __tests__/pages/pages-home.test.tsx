import { render, screen } from "@testing-library/react";
import HomePage from "@/pages/index";
import Home from "@/pages/home";
import { expectHeroHeading } from "../utils/test-utils";

describe("Home page", () => {
  it("renders the two entry buttons", () => {
    render(<HomePage />);

    const buttons = screen
      .getAllByRole("button")
      .filter((btn) => btn.textContent!.includes("ENTER SITE"));
    expect(buttons).toHaveLength(2);
  });

  it("renders both brand logos", () => {
    render(<HomePage />);

    expect(screen.getByAltText("Pathway logo")).toBeInTheDocument();
    expect(screen.getByAltText("BioMatrix logo")).toBeInTheDocument();
  });
});

describe("Home sub page", () => {
  it("renders the hero heading", () => {
    render(<Home />);

    expectHeroHeading("Pathway Vs BioMatrix");
  });

  it("renders the news and events sections", () => {
    render(<Home />);

    expect(screen.getByText("Recent News")).toBeInTheDocument();
    expect(screen.getByText("Latest Events")).toBeInTheDocument();
  });
});
