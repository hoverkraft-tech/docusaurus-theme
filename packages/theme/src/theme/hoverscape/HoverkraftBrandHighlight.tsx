import type { ReactElement, ReactNode } from "react";
import clsx from "clsx";
import styles from "./HoverkraftBrandHighlight.module.css";

export interface HoverkraftBrandHighlightProps {
  children: ReactNode;
  className?: string;
}

export function HoverkraftBrandHighlight({
  children,
  className,
}: HoverkraftBrandHighlightProps): ReactElement | null {
  if (children === null || children === undefined) {
    return null;
  }

  if (typeof children === "string" && children.trim().length === 0) {
    return null;
  }

  return <span className={clsx(styles.highlight, className)}>{children}</span>;
}

export default HoverkraftBrandHighlight;
