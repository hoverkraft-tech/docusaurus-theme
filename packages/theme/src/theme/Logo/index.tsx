import type { ComponentType, SVGProps } from "react";

import logoAsset from "../../assets/logo.svg";

type SvgComponent = ComponentType<SVGProps<SVGSVGElement>>;

function isSvgComponent(value: typeof logoAsset): value is SvgComponent {
  return typeof value === "function";
}

export default function HoverkraftLogo(): JSX.Element {
  const SvgLogo = isSvgComponent(logoAsset) ? (logoAsset as SvgComponent) : undefined;

  return (
    <a
      href="/"
      className="hoverkraft-logo hoverkraft-logo--text"
      aria-label="Hoverkraft Home - Navigate to homepage"
    >
      <span className="hoverkraft-logo__text" aria-hidden="true">
        Hoverkraft
      </span>
      {SvgLogo ? (
        <SvgLogo className="hoverkraft-logo__image" aria-hidden="true" focusable="false" />
      ) : (
        <img className="hoverkraft-logo__image" src={logoAsset as string} alt="" />
      )}
    </a>
  );
}
