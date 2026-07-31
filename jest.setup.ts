import "@testing-library/jest-dom";
import React from "react";

Object.defineProperty(window, "scrollTo", {
  value: jest.fn(),
  writable: true,
});

Object.defineProperty(window, "open", {
  value: jest.fn(),
  writable: true,
});

Object.defineProperty(window, "scrollY", {
  value: 0,
  writable: true,
});

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: Record<string, unknown>) => {
    const rest = { ...props };
    delete rest.fill;
    delete rest.priority;
    return React.createElement("img", {
      ...rest,
      src: rest.src as string,
      alt: rest.alt as string,
    });
  },
}));
