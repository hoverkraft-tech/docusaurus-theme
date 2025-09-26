import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import type { ThemeConfig } from '../../types';
import HoverkraftFooter from '../Footer';
import HoverkraftLogo from '../Logo';

import './styles.css';

interface Props {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  wrapperClassName?: string;
  pageClassName?: string;
}

export default function HoverkraftLayout(props: Props): JSX.Element {
  const { hoverkraft } = useThemeConfig() as ThemeConfig;

  React.useEffect(() => {
    // Apply Hoverkraft branding styles
    if (hoverkraft?.colors) {
      const root = document.documentElement;
      if (hoverkraft.colors.primary) {
        root.style.setProperty('--hk-color-primary', hoverkraft.colors.primary);
      }
      if (hoverkraft.colors.secondary) {
        root.style.setProperty(
          '--hk-color-secondary',
          hoverkraft.colors.secondary
        );
      }
      if (hoverkraft.colors.accent) {
        root.style.setProperty('--hk-color-accent', hoverkraft.colors.accent);
      }
    }
  }, [hoverkraft]);

  return (
    <div className="hoverkraft-theme">
      <div className="hoverkraft-layout">
        <header className="hoverkraft-header">
          <HoverkraftLogo />
          <h1>Documentation</h1>
        </header>
        <main className="hoverkraft-main">{props.children}</main>
        <HoverkraftFooter />
      </div>
    </div>
  );
}
