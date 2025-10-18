import type React from "react";

import "./styles.css";

function HoverkraftLogo(): React.ReactElement {
  return (
    <svg
      className="hoverkraft-footer__logo"
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Hoverkraft Logo"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1998ff" />
          <stop offset="100%" stopColor="#ff5a02" />
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
          <p>Building the future of technology.</p>
        </div>

        <nav className="hoverkraft-footer__section" aria-label="Resources">
          <h4>Resources</h4>
          <ul className="hoverkraft-footer__links">
            <li>
              <a href="/docs">Documentation</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/community">Community</a>
            </li>
          </ul>
        </nav>

        <nav className="hoverkraft-footer__section" aria-label="Company">
          <h4>Company</h4>
          <ul className="hoverkraft-footer__links">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
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
