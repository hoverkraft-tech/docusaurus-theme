import type React from "react";

import "./styles.css";

function HoverkraftLogo(): React.ReactElement {
  return (
    <svg
      className="hoverkraft-footer__logo"
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="footer-logo-title"
    >
      <title id="footer-logo-title">Hoverkraft Logo</title>
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0073cc" />
          <stop offset="100%" stopColor="#cc4400" />
        </linearGradient>
      </defs>
      {/* Stylized "H" icon */}
      <rect x="10" y="15" width="8" height="30" fill="url(#logoGradient)" rx="2" />
      <rect x="32" y="15" width="8" height="30" fill="url(#logoGradient)" rx="2" />
      <rect x="18" y="27" width="14" height="6" fill="url(#logoGradient)" rx="2" />
      {/* Text "Hoverkraft" */}
      <text
        x="55"
        y="38"
        fontFamily="Inter, sans-serif"
        fontSize="24"
        fontWeight="700"
        fill="#ffffff"
      >
        Hoverkraft
      </text>
    </svg>
  );
}

export default function HoverkraftFooter(): JSX.Element {
  return (
    <footer className="hoverkraft-footer" role="contentinfo">
      <div className="hoverkraft-footer__content">
        <div className="hoverkraft-footer__section hoverkraft-footer__brand">
          <HoverkraftLogo />
          <p className="hoverkraft-footer__description">Building the future of technology.</p>
        </div>

        <nav className="hoverkraft-footer__section" aria-labelledby="resources-heading">
          <h4 id="resources-heading">Resources</h4>
          <ul className="hoverkraft-footer__links">
            <li>
              <a href="/docs" aria-label="View Documentation">
                Documentation
              </a>
            </li>
            <li>
              <a href="/blog" aria-label="Read our Blog">
                Blog
              </a>
            </li>
            <li>
              <a href="/community" aria-label="Join our Community">
                Community
              </a>
            </li>
          </ul>
        </nav>

        <nav className="hoverkraft-footer__section" aria-labelledby="company-heading">
          <h4 id="company-heading">Company</h4>
          <ul className="hoverkraft-footer__links">
            <li>
              <a href="/about" aria-label="Learn About Us">
                About
              </a>
            </li>
            <li>
              <a href="/careers" aria-label="Explore Career Opportunities">
                Careers
              </a>
            </li>
            <li>
              <a href="/contact" aria-label="Contact Us">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="hoverkraft-footer__bottom">
        <p>© {new Date().getFullYear()} Hoverkraft. All rights reserved.</p>
      </div>
    </footer>
  );
}
