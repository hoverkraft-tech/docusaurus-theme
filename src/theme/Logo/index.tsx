import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import type { ThemeConfig } from '../../types';

export default function HoverkraftLogo(): JSX.Element {
  const { hoverkraft } = useThemeConfig() as ThemeConfig;
  
  if (hoverkraft?.logo) {
    return (
      <a
        href={hoverkraft.logo.href || '/'}
        className="hoverkraft-logo"
      >
        <img
          src={hoverkraft.logo.src}
          alt={hoverkraft.logo.alt || 'Logo'}
          className="hoverkraft-logo__image"
        />
      </a>
    );
  }
  
  return (
    <a href="/" className="hoverkraft-logo hoverkraft-logo--text">
      <span className="hoverkraft-logo__text">Hoverkraft</span>
    </a>
  );
}