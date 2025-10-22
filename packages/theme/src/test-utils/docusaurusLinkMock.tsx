import type { PropsWithChildren } from "react";

export default function DocusaurusLinkMock(
  props: PropsWithChildren<{ to?: string; href?: string } & Record<string, unknown>>
) {
  const { to, href, children, ...rest } = props;
  return (
    <a href={(href ?? to ?? "#") as string} {...rest}>
      {children}
    </a>
  );
}
