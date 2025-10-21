import "./styles.css";
import HoverkraftLogo from "../Logo";

type FooterLink = {
  label: string;
  href: string;
};

const footerSections: { title: string; links: FooterLink[] }[] = [
  {
    title: "Docs",
    links: [
      { label: "Getting started", href: "/docs/getting-started" },
      { label: "Installation", href: "/docs/installation" },
      { label: "Configuration", href: "/docs/configuration" },
      { label: "Migration", href: "/docs/migration" },
    ],
  },
  {
    title: "Components",
    links: [
      { label: "Layout", href: "/docs/components/layout" },
      { label: "Footer", href: "/docs/components/footer" },
      { label: "Logo", href: "/docs/components/logo" },
    ],
  },
];

export default function HoverkraftFooter(): JSX.Element {
  return (
    <footer className="hoverkraft-footer" role="contentinfo">
      <div className="hoverkraft-footer__content">
        <div className="hoverkraft-footer__section hoverkraft-footer__brand">
          <div className="hoverkraft-footer__brand-mark">
            <HoverkraftLogo />
            <span className="hoverkraft-footer__brand-name">Hoverkraft</span>
          </div>
          <p className="hoverkraft-footer__description">Building the future of technology.</p>
        </div>

        {footerSections.map((section) => (
          <nav
            key={section.title}
            className="hoverkraft-footer__section"
            aria-labelledby={`resources-heading-${section.title}`}
          >
            <h4 id={`resources-heading-${section.title}`}>{section.title}</h4>
            <ul className="hoverkraft-footer__links">
              {section.links.map((link) => (
                <li key={link.href} aria-label={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="hoverkraft-footer__bottom">
        <p>© {new Date().getFullYear()} Hoverkraft. All rights reserved.</p>
      </div>
    </footer>
  );
}
