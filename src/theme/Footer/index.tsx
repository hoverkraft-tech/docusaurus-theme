import React from 'react';
import './styles.css';

export default function HoverkraftFooter(): JSX.Element {
  return (
    <footer className="hoverkraft-footer">
      <div className="hoverkraft-footer__content">
        <div className="hoverkraft-footer__section">
          <h4>Hoverkraft</h4>
          <p>Building the future of technology.</p>
        </div>

        <div className="hoverkraft-footer__section">
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
        </div>

        <div className="hoverkraft-footer__section">
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
        </div>
      </div>

      <div className="hoverkraft-footer__bottom">
        <p>© {new Date().getFullYear()} Hoverkraft. All rights reserved.</p>
      </div>
    </footer>
  );
}
