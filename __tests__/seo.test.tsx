import { render } from "@testing-library/react";
import Seo from "@/components/atoms/seo";

jest.mock("next/head", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe("Seo", () => {
  it("sets the document title", () => {
    render(<Seo title="About - Pathway" description="About description" />);

    expect(document.title).toBe("About - Pathway");
  });

  it("sets the meta description", () => {
    render(<Seo title="About - Pathway" description="About description" />);

    const meta = document.querySelector('meta[name="description"]');
    expect(meta?.getAttribute("content")).toBe("About description");
  });
});
