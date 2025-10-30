import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import {
  HoverkraftHero,
  HoverkraftBrandHighlight,
  HoverkraftFeatureList,
  HoverkraftButton,
  type HoverkraftFeatureItem,
  type HoverkraftAction,
} from "@hoverkraft/docusaurus-theme/components";
import styles from "./index.module.css";

const heroActions: HoverkraftAction[] = [
  {
    label: "Start building",
    to: "/docs/getting-started",
    variant: "primary",
  },
  {
    label: "Explore components",
    to: "/docs/components/layout",
    variant: "secondary",
  },
  {
    label: "View the blog demo",
    to: "/blog",
    variant: "outline",
  },
];

const featureList: HoverkraftFeatureItem[] = [
  {
    id: "feature-design",
    icon: "🎨",
    title: "Design your brand story",
    description:
      "Curated color palettes, typography scales, and polished spacing tokens that make every page look editorial-ready.",
  },
  {
    id: "feature-components",
    icon: "🧱",
    title: "Production-ready components",
    description:
      "Layout, Logo, and Footer building blocks ship theme-able, accessible, and ready to extend for your use-case.",
  },
  {
    id: "feature-dx",
    icon: "⚡",
    title: "DX you can trust",
    description:
      "Built on Docusaurus 3 with TypeScript definitions, validation utilities, and thoughtful defaults for frictionless iteration.",
  },
];

const colorSwatches = [
  {
    name: "Primary",
    token: "var(--ifm-color-primary)",
    fallback: "#1998ff",
    description: "Call-to-action buttons and interface highlights",
  },
  {
    name: "Secondary",
    token: "var(--hk-color-secondary, #ff5a02)",
    fallback: "#ff5a02",
    description: "Navigation links and supportive accents",
  },
  {
    name: "Accent",
    token: "var(--hk-color-accent, #ff5a02)",
    fallback: "#ff5a02",
    description: "Interactive emphasis states and badges",
  },
];

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const pageTitle = `Meet ${siteConfig.title}`;
  const pageDescription =
    "Elevate your Docusaurus site with the Hoverkraft theme: opinionated styling, smart defaults, and extensible components.";

  return (
    <Layout description={pageDescription}>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
        <meta property="og:description" content={pageDescription} />
        <meta name="twitter:description" content={pageDescription} />
      </Head>
      <main>
        <section className={styles.section}>
          <HoverkraftHero
            title={
              <>
                <HoverkraftBrandHighlight>Hoverkraft</HoverkraftBrandHighlight> Theme for Docusaurus
              </>
            }
            description="Craft documentation that feels premium out-of-the-box. Opinionated visual language meets pragmatic components that let your content shine."
            actions={heroActions}
            supportingVisual="/img/home.png"
            tone="midnight"
            align="center"
          />
        </section>

        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Everything your docs need to stand out</h2>
            <p className={styles.sectionSubtitle}>
              We distilled years of product storytelling into a reusable design system that works
              for launches, integrations, and long-form documentation.
            </p>
            <HoverkraftFeatureList features={featureList} align="center" />
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Color system ready to remix</h2>
            <p className={styles.sectionSubtitle}>
              Update three CSS variables and the entire site adapts—from hero gradients to code
              blocks and footers—while respecting accessibility contrast ratios.
            </p>
            <div className={styles.palette}>
              {colorSwatches.map((swatch) => (
                <div
                  key={swatch.name}
                  className={styles.swatch}
                  style={{ background: swatch.token }}
                >
                  <span>{swatch.name}</span>
                  <code>{swatch.fallback}</code>
                  <p>{swatch.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Built for modern teams</h2>
            <p className={styles.sectionSubtitle}>
              Every detail—from TypeScript support to content structure—was designed to keep teams
              shipping purposeful, consistent documentation.
            </p>
            <div className={styles.callout}>
              <h3 className={styles.calloutTitle}>Ready to bring Hoverkraft to your docs?</h3>
              <p>
                Follow the installation guide, wire up the theme config, and customize the layout in
                minutes. We included live examples, copy-ready snippets, and a migration path for
                existing sites.
              </p>
              <div className={styles.calloutButtons}>
                <HoverkraftButton to="/docs/installation" label="Install the theme" />
                <HoverkraftButton
                  to="/docs/configuration"
                  label="Configure Hoverkraft"
                  variant="secondary"
                />
                <HoverkraftButton
                  to="/docs/migration"
                  label="Migrate an existing site"
                  variant="outline"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
