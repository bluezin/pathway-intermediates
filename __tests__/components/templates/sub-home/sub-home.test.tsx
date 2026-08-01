import { render } from "@testing-library/react";
import SubHomeTemplate from "@/components/templates/sub-home";
import { expectHrefsToContain } from "../../../utils/test-utils";

describe("SubHomeTemplate", () => {
  it("renders the news and events sections", () => {
    const { container } = render(<SubHomeTemplate />);

    expect(
      container.querySelectorAll('[class*="content__container__items"] > div'),
    ).toHaveLength(3);
  });

  it("renders the relations links", () => {
    render(<SubHomeTemplate />);

    expectHrefsToContain("/species", "/about", "/products");
  });
});
