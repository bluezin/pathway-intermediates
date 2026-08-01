import { render, screen } from "@testing-library/react";
import About from "@/pages/about";
import BioMatrix from "@/pages/bio-matrix";
import EmployeeSpotlight from "@/pages/employee-spotlight";
import History from "@/pages/history";
import Map from "@/pages/map";
import MissionAndVision from "@/pages/mission&vision";
import { BIOMATRIX_URL, PATHWAY_URL } from "@/constants";
import { expectHeroHeading, expectHrefsToContain } from "../utils/test-utils";

describe("About page", () => {
  it("renders its hero heading", () => {
    render(<About />);

    expectHeroHeading("Pathway");
  });

  it("renders the main about heading", () => {
    render(<About />);

    expect(
      screen.getByText("We deliver the value-added solutions of feeding tomorrow"),
    ).toBeInTheDocument();
  });
});

describe("BioMatrix page", () => {
  it("renders its hero heading", () => {
    render(<BioMatrix />);

    expectHeroHeading("BioMatrix");
  });

  it("renders the external links to both sites", () => {
    render(<BioMatrix />);

    expectHrefsToContain(PATHWAY_URL, BIOMATRIX_URL);
  });
});

describe("Employee Spotlight page", () => {
  it("renders its hero heading", () => {
    render(<EmployeeSpotlight />);

    expectHeroHeading("Employee Spotlight");
  });
});

describe("History page", () => {
  it("renders its hero heading", () => {
    render(<History />);

    expectHeroHeading("History");
  });
});

describe("Map page", () => {
  it("renders the location section", () => {
    render(<Map />);

    expect(
      screen.getByRole("heading", { level: 2, name: "Location" }),
    ).toBeInTheDocument();
    expect(screen.getByTitle("map")).toHaveAttribute(
      "src",
      expect.stringContaining("google.com/maps"),
    );
  });
});

describe("Mission & Vision page", () => {
  it("renders its hero heading", () => {
    render(<MissionAndVision />);

    expectHeroHeading("Mision & Vision");
  });
});
