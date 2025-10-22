import type { ReactNode } from "react";
import clsx from "clsx";
import styles from "./HoverkraftHero.module.css";
import { HoverkraftButton } from "./HoverkraftButton";
import { HoverkraftBrandHighlight } from "./HoverkraftBrandHighlight";
import type { HoverkraftAction } from "../components.types";

export interface HoverkraftHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  brandedText?: ReactNode;
  supportingVisual?: ReactNode;
  actions?: HoverkraftAction[];
  align?: "left" | "center";
  tone?: "midnight" | "daylight";
  id?: string;
  className?: string;
}

function renderAction(action: HoverkraftAction, index: number) {
  const { id, size, ...rest } = action;

  return (
    <HoverkraftButton
      key={id ?? `hoverkraft-hero-action-${index}`}
      id={id}
      size={size ?? "lg"}
      className={styles.heroButton}
      {...rest}
    />
  );
}

export function HoverkraftHero({
  eyebrow,
  title,
  description,
  brandedText,
  supportingVisual,
  actions,
  align = "left",
  tone = "midnight",
  id,
  className,
}: HoverkraftHeroProps) {
  const hasSupportingVisual = supportingVisual !== null && supportingVisual !== undefined;
  const highlightContent =
    brandedText !== null && brandedText !== undefined ? (
      <HoverkraftBrandHighlight>{brandedText}</HoverkraftBrandHighlight>
    ) : null;

  return (
    <section id={id} className={clsx(styles.heroSection, styles[tone], className)}>
      <div className={styles.heroBackground} aria-hidden="true" />
      <div
        className={clsx(
          styles.heroContainer,
          align === "center" && styles.centerAlign,
          !hasSupportingVisual && styles.heroContainerNoVisual
        )}
      >
        <div className={styles.heroContent}>
          {eyebrow && <p className={styles.heroEyebrow}>{eyebrow}</p>}
          <h1 className={styles.heroTitle}>
            {title}
            {highlightContent}
          </h1>
          {description && <p className={styles.heroDescription}>{description}</p>}
          {actions && actions.length > 0 && (
            <div className={styles.heroActions}>
              {actions.map((action, index) => renderAction(action, index))}
            </div>
          )}
        </div>
        {hasSupportingVisual && <div className={styles.heroVisual}>{supportingVisual}</div>}
      </div>
    </section>
  );
}

export default HoverkraftHero;

export { HoverkraftBrandHighlight } from "./HoverkraftBrandHighlight";
export type { HoverkraftBrandHighlightProps } from "./HoverkraftBrandHighlight";
