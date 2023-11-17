import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, test } from "vitest";

import LinkedInIcon from ".";

describe("LinkedInIcon", () => {
  test("should render linkedin icon", () => {
    render(<LinkedInIcon />);

    const icon = screen.getByTestId("icon");

    expect(icon).toBeInTheDocument();
    expect(icon.nodeName.toLowerCase()).toEqual("svg");
  });
});
