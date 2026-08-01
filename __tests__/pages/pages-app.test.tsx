import { render, screen } from "@testing-library/react";
import App from "@/pages/_app";
import Document from "@/pages/_document";

const mockRouter = { pathname: "/about" };

jest.mock("next/router", () => ({
  useRouter: () => mockRouter,
}));

jest.mock("next/document", () => {
  const React = jest.requireActual("react");
  return {
    Html: ({ children, ...props }: Record<string, unknown>) =>
      React.createElement("div", { ...props, "data-testid": "html" }, children),
    Head: () => React.createElement("div", { "data-testid": "head" }),
    Main: () => React.createElement("div", { "data-testid": "main" }),
    NextScript: () => React.createElement("div", { "data-testid": "next-script" }),
  };
});

const MockComponent = () => <h1>Test page content</h1>;

describe("App", () => {
  it("renders the page component with the contact form and footer", () => {
    mockRouter.pathname = "/about";

    render(<App Component={MockComponent} pageProps={{}} />);

    expect(
      screen.getByRole("heading", { name: "Test page content" }),
    ).toBeInTheDocument();
    expect(screen.getByText(/847-873-1631/)).toBeInTheDocument();
    expect(screen.getByText(/©/)).toBeInTheDocument();
  });

  it("hides the contact form and footer on the home page", () => {
    mockRouter.pathname = "/";

    render(<App Component={MockComponent} pageProps={{}} />);

    expect(
      screen.getByRole("heading", { name: "Test page content" }),
    ).toBeInTheDocument();
    expect(screen.queryByText(/847-873-1631/)).toBeNull();
    expect(screen.queryByText(/©/)).toBeNull();
  });
});

describe("Document", () => {
  it("renders the html shell with the english lang", () => {
    render(<Document />);

    expect(screen.getByTestId("html")).toHaveAttribute("lang", "en");
  });
});
