import React from 'react';
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
