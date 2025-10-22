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

import { HoverkraftProjectCard } from "../hoverscape/HoverkraftProjectCard";

const project = {
  title: "compose-action",
  titleHref: "https://github.com/hoverkraft-tech/compose-action",
  meta: "⭐ 190 • TypeScript",
  description: "Run your docker-compose stack directly in GitHub Actions.",
  tags: ["github-actions", "docker"],
  actions: [
    {
      label: "View on GitHub",
      href: "https://github.com/hoverkraft-tech/compose-action",
    },
  ],
};

describe("HoverkraftProjectCard", () => {
  it("renders title as external link and actions as buttons", () => {
    const markup = renderToStaticMarkup(<HoverkraftProjectCard {...project} />);

    expect(markup).toContain("href=\"https://github.com/hoverkraft-tech/compose-action\"");
    expect(markup).toContain("View on GitHub");
    expect(markup).toContain("github-actions");
  });
});
