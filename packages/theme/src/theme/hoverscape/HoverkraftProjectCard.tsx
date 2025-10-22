import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./HoverkraftProjectCard.module.css";
import { HoverkraftButton } from "./HoverkraftButton";
import type { HoverkraftAction, HoverkraftProjectCardProps } from "../components.types";

function renderTitle(
  title: ReactNode,
  {
    titleHref,
    titleTo,
    titleTarget,
    titleRel,
  }: Pick<HoverkraftProjectCardProps, "titleHref" | "titleTo" | "titleTarget" | "titleRel">
) {
  if (titleHref) {
    return (
      <a href={titleHref} target={titleTarget ?? "_blank"} rel={titleRel ?? "noopener noreferrer"}>
        <span className={styles.titleLinkContent}>{title}</span>
      </a>
    );
  }

  if (titleTo) {
    return (
      <Link to={titleTo} target={titleTarget} rel={titleRel}>
        <span className={styles.titleLinkContent}>{title}</span>
      </Link>
    );
  }

  return <>{title}</>;
}

function renderAction(action: HoverkraftAction, className: string, index: number) {
  const { id, size, variant, ...rest } = action;

  return (
    <HoverkraftButton
      key={id ?? `hoverkraft-project-action-${index}`}
      id={id}
      size={size ?? "md"}
      variant={variant ?? "outline"}
      className={className}
      {...rest}
    />
  );
}

export function HoverkraftProjectCard({
  id,
  icon,
  title,
  titleHref,
  titleTo,
  titleTarget,
  titleRel,
  meta,
  description,
  tags,
  actions,
  accent = "primary",
  className,
}: HoverkraftProjectCardProps) {
  const accentClass = accent === "neutral" ? styles.neutral : styles.primary;

  return (
    <article id={id} className={clsx(styles.projectCard, accentClass, className)}>
      <header className={styles.projectHeader}>
        {icon !== null && icon !== undefined ? <div className={styles.projectIcon}>{icon}</div> : null}
        <div>
          <h3 className={styles.projectTitle}>
            {renderTitle(title, { titleHref, titleTo, titleTarget, titleRel })}
          </h3>
          {meta ? <p className={styles.projectMeta}>{meta}</p> : null}
        </div>
      </header>
      <p className={styles.projectDescription}>{description}</p>
      {tags && tags.length > 0 ? (
        <ul className={styles.projectTagList}>
          {tags.map((tag, index) => (
            <li key={typeof tag === "string" ? tag : index} className={styles.projectTag}>
              {tag}
            </li>
          ))}
        </ul>
      ) : null}
      {actions && actions.length > 0 ? (
        <div className={styles.projectActions}>
          {actions.map((action, index) => renderAction(action, styles.projectButton, index))}
        </div>
      ) : null}
    </article>
  );
}

export default HoverkraftProjectCard;
