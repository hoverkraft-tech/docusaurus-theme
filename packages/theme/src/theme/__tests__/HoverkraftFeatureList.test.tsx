import { renderToStaticMarkup } from "react-dom/server";
import { HoverkraftFeatureList } from "../hoverscape/HoverkraftFeatureList";

const features = [
  {
    id: "feature-1",
    icon: "🎨",
    title: "Design",
    description: "Craft beautiful docs with Hoverkraft patterns.",
  },
  {
    id: "feature-2",
    icon: "⚡",
    title: "Performance",
    description: "Ship fast with optimized assets and DX.",
  },
];

describe("HoverkraftFeatureList", () => {
  it("renders a card per feature", () => {
    const markup = renderToStaticMarkup(
      <HoverkraftFeatureList features={features} />,
    );

    const occurrences = markup.match(/class="[^"]*featureCard[^"]*"/g) ?? [];
    expect(occurrences).toHaveLength(features.length);
  });
});
