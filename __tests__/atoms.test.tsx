import { fireEvent, render, screen } from "@testing-library/react";
import TextField from "@/components/atoms/text-field";
import TextArea from "@/components/atoms/text-area";
import SelectField from "@/components/atoms/select-field";

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

    const options = screen
      .getAllByRole("button")
      .filter((btn) => btn.textContent!.trim() !== "");
    expect(options.length).toBeGreaterThan(1);

    fireEvent.click(options[1]);

    expect(onChange).toHaveBeenCalledWith(options[1].textContent);
    expect(screen.getByRole("textbox")).toHaveValue(
      options[1].textContent ?? "",
    );
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
