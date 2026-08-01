import { screen } from "@testing-library/react";

export const SPECIES_LINKS = [
  "/species/swine",
  "/species/poultry",
  "/species/ruminant",
  "/species/aquaculture",
];

export const CATEGORY_LINKS = [
  "/products/categories/accelerator-solutions",
  "/products/categories/gut-health-enhancers",
  "/products/categories/functional-feed-additives",
];

export const getLinkHrefs = () =>
  screen.getAllByRole("link").map((link) => link.getAttribute("href"));

export const getAnchorHrefs = (container: HTMLElement) =>
  Array.from(container.querySelectorAll("a")).map((a) =>
    a.getAttribute("href"),
  );

export const expectHrefsToContain = (...expected: string[]) => {
  expect(getLinkHrefs()).toEqual(expect.arrayContaining(expected));
};

export const expectAllHrefsToMatch = (pattern: RegExp) => {
  for (const href of getLinkHrefs()) {
    expect(href).toMatch(pattern);
  }
};

export const expectHeroHeading = (text: string) => {
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(text);
};

export const getVisibleButtons = () =>
  screen
    .getAllByRole("button")
    .filter((btn) => btn.textContent!.trim() !== "");
