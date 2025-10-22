import type { CSSProperties } from "react";
import clsx from "clsx";
import styles from "./HoverkraftFeatureList.module.css";
import type { HoverkraftFeatureItem, HoverkraftFeatureListProps } from "../components.types";

export type { HoverkraftFeatureItem, HoverkraftFeatureListProps } from "../components.types";

type GridStyle = CSSProperties & {
  "--hk-feature-min-width"?: string;
};

function FeatureCard({ id, icon, eyebrow, title, description }: HoverkraftFeatureItem) {
  return (
    <article id={id} className={styles.featureCard}>
      {eyebrow ? <p className={styles.featureEyebrow}>{eyebrow}</p> : null}
      {icon !== null && icon !== undefined ? <div className={styles.featureIcon}>{icon}</div> : null}
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </article>
  );
}

export function HoverkraftFeatureList({
  features,
  align = "start",
  minColumnWidth = 260,
  className,
  style,
}: HoverkraftFeatureListProps) {
  const gridStyle: GridStyle = {
    ...style,
    "--hk-feature-min-width": `${minColumnWidth}px`,
  };

  return (
    <div className={clsx(styles.featureGrid, align === "center" && styles.centerAligned, className)} style={gridStyle}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id ?? `feature-${index}`} {...feature} />
      ))}
    </div>
  );
}

export default HoverkraftFeatureList;
