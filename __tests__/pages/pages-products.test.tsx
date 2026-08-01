import { render, screen } from "@testing-library/react";
import Products from "@/pages/products";
import BoarPowerMax from "@/pages/products/boar-power-max";
import Coccilock from "@/pages/products/coccilock";
import Endophos from "@/pages/products/endophos";
import Endopower from "@/pages/products/endopower";
import Enncinate from "@/pages/products/enncinate";
import Fermkito from "@/pages/products/fermkito";
import Genikan from "@/pages/products/genikan";
import Gromega from "@/pages/products/gromega";
import GrowMax from "@/pages/products/grow-max";
import LipidolPrime from "@/pages/products/lipidol-prime";
import LipidolProtect from "@/pages/products/lipidol-protect";
import Lipidol from "@/pages/products/lipidol";
import Mycosecure from "@/pages/products/mycosecure";
import NuFex from "@/pages/products/nu-fex";
import ProbeBac from "@/pages/products/probe-bac";
import QLife from "@/pages/products/q-life";
import ThermoRex from "@/pages/products/thermo-rex";
import YeaMuneUp from "@/pages/products/yea-mune-up";
import {
  CATEGORY_LINKS,
  expectHeroHeading,
  expectHrefsToContain,
} from "../utils/test-utils";

describe("Products page", () => {
  it("renders its hero heading", () => {
    render(<Products />);

    expectHeroHeading("Products");
  });

  it("renders one link per product category", () => {
    render(<Products />);

    expectHrefsToContain(...CATEGORY_LINKS);
  });
});

describe.each([
  ["Boar Power Max", BoarPowerMax],
  ["CocciLock", Coccilock],
  ["Endo-Phos", Endophos],
  ["Endo-Power", Endopower],
  ["Enncinate", Enncinate],
  ["Fermkito", Fermkito],
  ["Genikan", Genikan],
  ["Gromega", Gromega],
  ["GrowMax", GrowMax],
  ["LipidolPrime", LipidolPrime],
  ["LipidolProtect", LipidolProtect],
  ["Lipidol", Lipidol],
  ["MycoSecure", Mycosecure],
  ["NuFex", NuFex],
  ["ProBe-Bac", ProbeBac],
  ["Q-Life", QLife],
  ["ThermoRex", ThermoRex],
  ["YeaMune-UP", YeaMuneUp],
])("%s page", (product, Page) => {
  it("renders the product logo", () => {
    render(<Page />);

    expect(screen.getByAltText(product)).toBeInTheDocument();
  });

  it("renders its hero heading", () => {
    render(<Page />);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
});
