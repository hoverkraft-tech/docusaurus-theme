import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { HoverkraftHero } from "../hoverscape/HoverkraftHero";

describe("HoverkraftHero", () => {
  it("renders supporting image when a path is provided", () => {
    const markup = renderToStaticMarkup(
      <HoverkraftHero
        title="Hoverkraft"
        supportingVisual="/img/example.png"
        supportingVisualAlt="Dashboard screenshot"
      />
    );

    expect(markup).toContain("img");
    expect(markup).toContain('src="/img/example.png"');
    expect(markup).toContain('alt="Dashboard screenshot"');
  });

  it("omits supporting image when the path is empty", () => {
    const markup = renderToStaticMarkup(
      <HoverkraftHero title="Hoverkraft" supportingVisual="   " />
    );

    expect(markup).not.toContain("<img");
  });
});
