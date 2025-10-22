import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { HoverkraftBrandHighlight } from "../hoverscape/HoverkraftBrandHighlight";

describe("HoverkraftBrandHighlight", () => {
  it("renders the highlight span when children are provided", () => {
    const markup = renderToStaticMarkup(
      <HoverkraftBrandHighlight>Hoverkraft</HoverkraftBrandHighlight>
    );

    expect(markup).toContain(">Hoverkraft<");
  });

  it("omits rendering when children resolve to an empty string", () => {
    const markup = renderToStaticMarkup(
      <HoverkraftBrandHighlight>{"   "}</HoverkraftBrandHighlight>
    );

    expect(markup).toBe("");
  });

  it("merges custom class names", () => {
    const markup = renderToStaticMarkup(
      <HoverkraftBrandHighlight className="custom">Brand</HoverkraftBrandHighlight>
    );

    expect(markup).toContain("custom");
  });
});
