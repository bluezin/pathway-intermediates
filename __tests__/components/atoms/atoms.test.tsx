import { fireEvent, render, screen } from "@testing-library/react";
import TextField from "@/components/atoms/text-field";
import TextArea from "@/components/atoms/text-area";
import SelectField from "@/components/atoms/select-field";
import { getVisibleButtons } from "../../utils/test-utils";

describe("TextField", () => {
  it("renders the label and the input", () => {
    render(<TextField id="name" label="Name" onChange={jest.fn()} />);

    expect(document.getElementById("name")).toBeInTheDocument();
  });

  it("shows the error message only when provided", () => {
    const { container, rerender } = render(
      <TextField id="name" label="Name" onChange={jest.fn()} />,
    );
    expect(container.querySelector("strong")).toBeNull();

    rerender(
      <TextField
        id="name"
        label="Name"
        onChange={jest.fn()}
        messageError="Name is required"
      />,
    );
    expect(container.querySelector("strong")).toBeInTheDocument();
  });
});

describe("TextArea", () => {
  it("renders the label and the textarea", () => {
    render(<TextArea id="message" label="Message" onChange={jest.fn()} />);

    expect(document.getElementById("message")).toBeInTheDocument();
  });

  it("shows the error message only when provided", () => {
    const { container, rerender } = render(
      <TextArea id="message" label="Message" onChange={jest.fn()} />,
    );
    expect(container.querySelector("strong")).toBeNull();

    rerender(
      <TextArea
        id="message"
        label="Message"
        onChange={jest.fn()}
        messageError="Message is required"
      />,
    );
    expect(container.querySelector("strong")).toBeInTheDocument();
  });
});

describe("SelectField", () => {
  it("opens the options and selects one", () => {
    const onChange = jest.fn();
    render(<SelectField id="subject" label="Subject" onChange={onChange} />);

    fireEvent.click(screen.getByRole("textbox"));

    const options = getVisibleButtons();
    expect(options.length).toBeGreaterThan(1);

    fireEvent.click(options[1]);

    expect(onChange).toHaveBeenCalledWith(options[1].textContent);
    expect(screen.getByRole("textbox")).toHaveValue(
      options[1].textContent ?? "",
    );
  });

  it("opens the options when the arrow button is clicked", () => {
    const { container } = render(
      <SelectField id="subject" label="Subject" onChange={jest.fn()} />,
    );
    expect(
      container.querySelector('[class*="container__options"]'),
    ).toBeNull();

    const arrow = container.querySelector(
      '[class*="container__input"] button',
    ) as Element;
    fireEvent.click(arrow);

    expect(
      container.querySelector('[class*="container__options"]'),
    ).toBeInTheDocument();
  });

  it("selects the Distributor, Recruit and Others options", () => {
    const onChange = jest.fn();
    render(<SelectField id="subject" label="Subject" onChange={onChange} />);

    for (const value of ["Select Subject", "Products", "Distributor", "Recruit", "Others"]) {
      fireEvent.click(screen.getByRole("textbox"));

      fireEvent.click(
        screen
          .getAllByRole("button")
          .find((btn) => btn.textContent!.trim() === value)!,
      );
    }

    expect(onChange).toHaveBeenNthCalledWith(1, "Select Subject");
    expect(onChange).toHaveBeenNthCalledWith(2, "Products");
    expect(onChange).toHaveBeenNthCalledWith(3, "Distributor");
    expect(onChange).toHaveBeenNthCalledWith(4, "Recruit");
    expect(onChange).toHaveBeenNthCalledWith(5, "Others");
  });

  it("closes the options when clicking outside", () => {
    const { container } = render(
      <SelectField id="subject" label="Subject" onChange={jest.fn()} />,
    );

    fireEvent.click(screen.getByRole("textbox"));
    expect(
      container.querySelector('[class*="container__options"]'),
    ).toBeInTheDocument();

    fireEvent.mouseDown(document.body);
    expect(
      container.querySelector('[class*="container__options"]'),
    ).toBeNull();
  });

  it("shows the error message only when provided", () => {
    const { container, rerender } = render(
      <SelectField id="subject" label="Subject" onChange={jest.fn()} />,
    );
    expect(container.querySelector("strong")).toBeNull();

    rerender(
      <SelectField
        id="subject"
        label="Subject"
        onChange={jest.fn()}
        messageError="Subject is required"
      />,
    );
    expect(container.querySelector("strong")).toBeInTheDocument();
  });
});
