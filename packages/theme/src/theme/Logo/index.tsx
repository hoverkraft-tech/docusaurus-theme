import Link from "@docusaurus/Link";

import Logo from "../../assets/logo.svg";

export default function HoverkraftLogo(): JSX.Element {
  return (
    <Link href="/" className="navbar__brand" aria-label="Hoverkraft Home - Navigate to homepage">
      <Logo className="navbar__logo" aria-hidden="true" focusable="false" />
    </Link>
  );
}
