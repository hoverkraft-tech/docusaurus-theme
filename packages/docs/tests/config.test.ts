describe("docusaurus.config", () => {
  it("enables the Hoverkraft theme", async () => {
    const module = await import("../docusaurus.config.js");
    const config = module.default;

    expect(config.title).toBe("Hoverkraft Theme");
    expect(config.themes).toContain("@hoverkraft/docusaurus-theme");
  });

  it("configures docs content from the content directory", async () => {
    const module = await import("../docusaurus.config.js");
    const config = module.default;

    const [presetName, presetOptions] = config.presets[0];
    expect(presetName).toBe("classic");
    expect(presetOptions.docs?.path).toBe("content");
    expect(presetOptions.docs?.sidebarPath).toContain("sidebars.js");
  });
});

describe("sidebars.js", () => {
  it("exposes the tutorial sidebar entries", async () => {
    const module = await import("../sidebars.js");
    const sidebars = module.default as {
      tutorialSidebar: Array<string | { type: string; label: string; items: string[] }>;
    };

    expect(sidebars.tutorialSidebar).toContain("getting-started");
    expect(sidebars.tutorialSidebar).toContain("installation");
    expect(sidebars.tutorialSidebar).toContain("configuration");
    expect(sidebars.tutorialSidebar).toContain("migration");
    expect(sidebars.tutorialSidebar).toContain("examples");
    expect(sidebars.tutorialSidebar).toContain("quick-reference");
  });

  it("lists component documentation inside a category", async () => {
    const module = await import("../sidebars.js");
    const sidebars = module.default as {
      tutorialSidebar: Array<string | { type: string; label: string; items: string[] }>;
    };

    const componentsCategory = sidebars.tutorialSidebar.find(
      (entry) => typeof entry === "object" && entry !== null && "label" in entry && "items" in entry
    ) as { label: string; items: string[] } | undefined;

    expect(componentsCategory).toBeDefined();
    expect(componentsCategory?.label).toBe("Components");
    expect(componentsCategory?.items).toEqual([
      "components/layout",
      "components/hero",
      "components/feature-grid",
      "components/project-card",
      "components/buttons",
      "components/footer",
      "components/logo",
    ]);
  });
});
