import { PageMetadata } from "@docusaurus/theme-common";
import LayoutProvider from "@theme/Layout/Provider";
import type React from "react";

import HoverkraftFooter from "../Footer";
import HoverkraftLogo from "../Logo";

import "./styles.css";

interface Props {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  wrapperClassName?: string;
  pageClassName?: string;
  noFooter?: boolean;
  noNavbar?: boolean;
}

function cx(...classNames: (string | undefined)[]): string {
  return classNames.filter(Boolean).join(" ");
}

export default function HoverkraftLayout(props: Props): JSX.Element {
  const {
    children,
    title,
    description,
    keywords,
    image,
    wrapperClassName,
    pageClassName,
    noFooter,
    noNavbar,
  } = props;

  const containerClassName = cx("hoverkraft-theme", wrapperClassName);
  const mainClassName = cx("hoverkraft-main", pageClassName);
  const heading = title ?? "Documentation";

  return (
    <LayoutProvider>
      <PageMetadata
        title={title}
        description={description}
        keywords={keywords}
        image={image}
      />

      <div className={containerClassName}>
        <div className="hoverkraft-layout">
          {!noNavbar && (
            <header className={cx("hoverkraft-header", "navbar")}>
              <HoverkraftLogo />
              <h1>{heading}</h1>
            </header>
          )}
          <main className={mainClassName}>{children}</main>
          {!noFooter && <HoverkraftFooter />}
        </div>
      </div>
    </LayoutProvider>
  );
}
