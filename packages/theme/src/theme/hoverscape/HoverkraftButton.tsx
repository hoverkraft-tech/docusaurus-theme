import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import styles from "./HoverkraftButton.module.css";
import type { HoverkraftActionVariant, HoverkraftActionSize } from "../components.types";

export interface HoverkraftButtonBaseProps {
  label: ReactNode;
  icon?: ReactNode;
  variant?: HoverkraftActionVariant;
  size?: HoverkraftActionSize;
  className?: string;
  ariaLabel?: string;
  id?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  children?: ReactNode;
}

interface HoverkraftButtonWithTo extends HoverkraftButtonBaseProps {
  to: string;
  href?: never;
}

interface HoverkraftButtonWithHref extends HoverkraftButtonBaseProps {
  href: string;
  to?: never;
}

export type HoverkraftButtonProps = HoverkraftButtonWithTo | HoverkraftButtonWithHref;

function getVariantClass(variant: HoverkraftActionVariant | undefined) {
  switch (variant) {
    case "secondary":
      return styles.secondary;
    case "outline":
      return styles.outline;
    default:
      return styles.primary;
  }
}

function getSizeClass(size: HoverkraftActionSize | undefined) {
  switch (size) {
    case "lg":
      return styles.sizeLg;
    case "md":
    default:
      return styles.sizeMd;
  }
}

export function HoverkraftButton({
  to,
  href,
  label,
  icon,
  variant,
  size = "md",
  className,
  ariaLabel,
  id,
  target,
  rel,
  children,
}: HoverkraftButtonProps) {
  const content = children ?? label;
  const buttonClassName = clsx(styles.button, getVariantClass(variant), getSizeClass(size), className);

  if (href) {
    return (
      <a
        id={id}
        href={href}
        className={buttonClassName}
        target={target ?? "_self"}
        rel={rel}
        aria-label={ariaLabel}
      >
        {icon !== null && icon !== undefined ? (
          <span className={styles.icon}>{icon}</span>
        ) : null}
        <span className={styles.label}>{content}</span>
      </a>
    );
  }

  return (
    <Link id={id} to={to} className={buttonClassName} aria-label={ariaLabel} target={target} rel={rel}>
      {icon !== null && icon !== undefined ? <span className={styles.icon}>{icon}</span> : null}
      <span className={styles.label}>{content}</span>
    </Link>
  );
}

export default HoverkraftButton;
