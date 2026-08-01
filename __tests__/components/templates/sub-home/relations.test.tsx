import { render } from "@testing-library/react";
import Relations from "@/components/templates/sub-home/components/relations";
import { getAnchorHrefs } from "../../../utils/test-utils";

describe("Relations", () => {
  it("renders the three section links", () => {
    const { container } = render(<Relations />);

    const hrefs = getAnchorHrefs(container);
    expect(hrefs).toHaveLength(3);
    expect(hrefs).toEqual(expect.arrayContaining(["/species", "/about", "/products"]));
  });
});
