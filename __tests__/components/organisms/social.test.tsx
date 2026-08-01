import { render } from "@testing-library/react";
import Social from "@/components/organisms/nav/components/social";
import { getAnchorHrefs } from "../../utils/test-utils";

describe("Social", () => {
  it("renders the social links with the right urls", () => {
    const { container } = render(<Social />);

    const hrefs = getAnchorHrefs(container);
    expect(hrefs).toContain(
      "https://www.facebook.com/Pathway.Intermediates.global/",
    );
    expect(hrefs).toContain(
      "https://www.linkedin.com/company/pathway-intermediates/",
    );
  });
});
