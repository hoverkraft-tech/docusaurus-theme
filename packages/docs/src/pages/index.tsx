import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "./index.module.css";

type FeatureItem = {
  title: string;
  emoji: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Design your brand story",
    emoji: "🎨",
    description: (
      <>
        Fully own the visual identity of your documentation with curated color palettes, typography
        scales, and polished spacing tokens that make every page look editorial-ready.
      </>
    ),
  },
  {
    title: "Production-ready components",
    emoji: "🧱",
    description: (
      <>
        Ship faster with Layout, Logo, and Footer components that balance personality and usability.
        Every piece is theme-able, accessible, and ready to extend.
      </>
    ),
  },
  {
    title: "DX you can trust",
    emoji: "⚡️",
    description: (
      <>
        Built on the latest Docusaurus 3 stack with TypeScript definitions, automated validation,
        and thoughtful defaults so you can iterate with confidence.
      </>
    ),
  },
];

function Feature({ title, emoji, description }: FeatureItem) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureTitle}>
        <span className={styles.featureEmoji} aria-hidden="true">
          {emoji}
        </span>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
}

const colorSwatches = [
  {
    name: "Primary",
    token: "var(--ifm-color-primary)",
    fallback: "#1998ff",
    description: "Call-to-action buttons and highlights",
  },
  {
    name: "Secondary",
    token: "var(--hk-color-secondary, #ff5a02)",
    fallback: "#ff5a02",
    description: "Navigation and supportive accents",
  },
  {
    name: "Accent",
    token: "var(--hk-color-accent, #ff5a02)",
    fallback: "#ff5a02",
    description: "Interactive elements and emphasis",
  },
];

const integrationHighlights = [
  {
    title: "Zero-config adoption",
    copy: "Drop the theme into a Docusaurus v3 project and go live instantly.",
  },
  {
    title: "TypeScript-first",
    copy: "Ship with rich typings, config validation, and editor autocompletion.",
  },
  {
    title: "Extend with confidence",
    copy: "Override any piece via Swizzle or compose your own components.",
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
        <section className={clsx(styles.section, styles.heroBanner)}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Hoverkraft Theme for Docusaurus</h1>
            <p className={styles.heroSubtitle}>
              Craft documentation that feels premium out-of-the-box. The Hoverkraft theme blends an
              opinionated visual system with pragmatic components that stay out of your way and let
              your content shine.
            </p>
            <div className={styles.heroButtons}>
              <Link className="button button--primary button--lg" to="/docs/getting-started">
                Start building
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/components/layout">
                Explore components
              </Link>
              <Link className="button button--outline button--lg" to="/blog">
                View the blog demo
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Everything your docs need to stand out</h2>
            <p className={styles.sectionSubtitle}>
              We distilled years of product storytelling into a reusable design system that works
              for launches, integrations, and long-form documentation.
            </p>
            <div className={styles.features}>
              {FeatureList.map((props) => (
                <Feature key={props.title} {...props} />
              ))}
            </div>
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
            <div className={styles.integrationList}>
              {integrationHighlights.map(({ title, copy }) => (
                <div key={title} className={styles.integrationCard}>
                  <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>{title}</h3>
                  <p style={{ margin: 0 }}>{copy}</p>
                </div>
              ))}
            </div>
            <div className={styles.callout}>
              <h3 className={styles.calloutTitle}>Ready to bring Hoverkraft to your docs?</h3>
              <p>
                Follow the installation guide, wire up the theme config, and customize the layout in
                minutes. We included live examples, copy-ready snippets, and a migration path for
                existing sites.
              </p>
              <div className={styles.calloutButtons}>
                <Link className="button button--primary button--lg" to="/docs/installation">
                  Install the theme
                </Link>
                <Link className="button button--secondary button--lg" to="/docs/configuration">
                  Configure Hoverkraft
                </Link>
                <Link className="button button--outline button--lg" to="/docs/migration">
                  Migrate an existing site
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
