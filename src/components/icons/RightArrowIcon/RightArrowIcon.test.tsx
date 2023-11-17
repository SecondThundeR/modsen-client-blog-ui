import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, test } from "vitest";

import RightArrowIcon from ".";

describe("RightArrowIcon", () => {
  test("should render right arrow icon", () => {
    render(<RightArrowIcon />);

    const icon = screen.getByTestId("icon");

    expect(icon).toBeInTheDocument();
    expect(icon.nodeName.toLowerCase()).toEqual("svg");
  });
});
