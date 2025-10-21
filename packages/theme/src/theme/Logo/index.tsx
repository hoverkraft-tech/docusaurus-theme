import Link from "@docusaurus/Link";

import Logo from "../../assets/logo.svg";

export default function HoverkraftLogo(): JSX.Element {
  return (
    <Link
      href="/"
      className="hoverkraft-logo hoverkraft-logo--text"
      aria-label="Hoverkraft Home - Navigate to homepage"
    >
      <Logo className="hoverkraft-logo__image" aria-hidden="true" focusable="false" />
    </Link>
  );
}
