import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

jest.mock("@docusaurus/Link", () => ({
  __esModule: true,
  default: (props: React.PropsWithChildren<Record<string, unknown>>) => (
    <a {...props} href={props.to as string}>
      {props.children}
    </a>
  ),
}));

import { HoverkraftButton } from "../hoverscape/HoverkraftButton";

describe("HoverkraftButton", () => {
  it("renders as anchor when href is provided", () => {
    const markup = renderToStaticMarkup(
      <HoverkraftButton href="https://hoverkraft.cloud" label="Visit" />
    );

    expect(markup).toContain("href=\"https://hoverkraft.cloud\"");
    expect(markup).toContain("Visit");
  });

  it("renders as internal link when to is provided", () => {
    const markup = renderToStaticMarkup(<HoverkraftButton to="/docs" label="Docs" />);

    expect(markup).toContain("href=\"/docs\"");
    expect(markup).toContain("Docs");
  });
});
