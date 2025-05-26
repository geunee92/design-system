import { describe, expect, it } from "vitest";
import React from "react";
import { render, screen } from "@/src/shared/utils/test/testUtils";

describe("page", () => {
  it("should render", () => {
    render(<div>test</div>);

    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
