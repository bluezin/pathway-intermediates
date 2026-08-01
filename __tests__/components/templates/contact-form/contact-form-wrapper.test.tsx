import { fireEvent, render, screen } from "@testing-library/react";
import ContactForm from "@/components/templates/contact-form";
import { expectHrefsToContain } from "../../../utils/test-utils";

describe("ContactForm", () => {
  it("renders the heading and the office information", () => {
    render(<ContactForm />);

    expect(
      screen.getByRole("heading", { name: "Getting in touch is easy" }),
    ).toBeInTheDocument();
    expect(screen.getByText(/3701 Algonquin Rd/i)).toBeInTheDocument();
    expect(screen.getByText(/847-873-1631/i)).toBeInTheDocument();
  });

  it("links to the location map", () => {
    render(<ContactForm />);

    const mapLink = screen.getByRole("link", {
      name: /view our location on the map/i,
    });
    expect(mapLink).toHaveAttribute("href", "/map");
  });

  it("renders the social media links", () => {
    render(<ContactForm />);

    expectHrefsToContain(
      "https://www.facebook.com/Pathway.Intermediates.global/",
      "https://www.linkedin.com/company/pathway-intermediates/",
    );
  });

  it("renders the contact form fields", () => {
    render(<ContactForm />);

    expect(screen.getAllByRole("textbox")).toHaveLength(7);
  });

  it("toggles the form open state from the send message button", () => {
    const { container } = render(<ContactForm />);

    const form = container.querySelector("#form") as Element;
    expect(form.className).not.toContain("open__form");

    fireEvent.click(
      container.querySelector('[class*="container__send__message"] button') as Element,
    );

    expect(form.className).toContain("open__form");
  });
});
