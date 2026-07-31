import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "@/components/templates/contact-form/components/form";

const getInput = (id: string) => document.getElementById(id) as HTMLInputElement;

const clickSend = async (user: ReturnType<typeof userEvent.setup>) => {
  const buttons = screen.getAllByRole("button");
  await user.click(buttons[buttons.length - 1]);
};

const selectSubject = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.click(getInput("subject"));

  const options = screen
    .getAllByRole("button")
    .filter((btn) => btn.textContent!.trim() !== "");
  await user.click(options[1]);
};

describe("ContactForm", () => {
  beforeEach(() => {
    (window.open as jest.Mock).mockClear();
  });

  it("renders all the fields", () => {
    render(<Form open={false} setOpen={jest.fn()} />);

    expect(screen.getAllByRole("textbox")).toHaveLength(7);
    expect(screen.getAllByRole("button").length).toBeGreaterThan(0);
  });

  it("shows validation errors when submitting empty", async () => {
    const user = userEvent.setup();
    const { container } = render(<Form open={false} setOpen={jest.fn()} />);

    await clickSend(user);

    await waitFor(() => {
      expect(
        container.querySelectorAll('[class*="messageError"]'),
      ).toHaveLength(7);
    });

    expect(window.open).not.toHaveBeenCalled();
  });

  it("rejects an invalid email", async () => {
    const user = userEvent.setup();
    render(<Form open={false} setOpen={jest.fn()} />);

    await selectSubject(user);
    await user.type(getInput("country"), "USA");
    await user.type(getInput("firstName"), "Juan");
    await user.type(getInput("lastName"), "Perez");
    await user.type(getInput("company"), "Acme");
    await user.type(getInput("email"), "invalid-email");
    await user.type(getInput("message"), "Hello");

    await clickSend(user);

    await waitFor(() => {
      const emailField = getInput("email").closest("div") as HTMLDivElement;
      expect(emailField.querySelector("strong")).toBeInTheDocument();
    });

    expect(window.open).not.toHaveBeenCalled();
  });

  it("opens the mail client with the submitted data", async () => {
    const user = userEvent.setup();
    render(<Form open={false} setOpen={jest.fn()} />);

    await selectSubject(user);
    await user.type(getInput("country"), "USA");
    await user.type(getInput("firstName"), "Juan");
    await user.type(getInput("lastName"), "Perez");
    await user.type(getInput("company"), "Acme");
    await user.type(getInput("email"), "juan@example.com");
    await user.type(getInput("message"), "Hello there");

    await clickSend(user);

    await waitFor(() => {
      expect(window.open).toHaveBeenCalledWith(
        expect.stringContaining("mailto:global@pathway-intermediates.com"),
        "_blank",
      );
    });

    const url = (window.open as jest.Mock).mock.calls[0][0] as string;
    expect(url).toContain("Juan");
    expect(url).toContain("Hello there");
  });
});
