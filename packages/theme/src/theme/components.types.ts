import type { CSSProperties, ReactNode } from "react";

export type HoverkraftActionVariant = "primary" | "secondary" | "outline";
export type HoverkraftActionSize = "md" | "lg";

interface BaseAction {
  label: ReactNode;
  icon?: ReactNode;
  variant?: HoverkraftActionVariant;
  size?: HoverkraftActionSize;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  ariaLabel?: string;
  id?: string;
}

interface ActionWithTo extends BaseAction {
  to: string;
  href?: never;
}

interface ActionWithHref extends BaseAction {
  href: string;
  to?: never;
}

export type HoverkraftAction = ActionWithTo | ActionWithHref;

export interface HoverkraftFeatureItem {
  id?: string;
  icon?: ReactNode;
  eyebrow?: ReactNode;
  title: ReactNode;
  description: ReactNode;
}

export interface HoverkraftFeatureListProps {
  features: HoverkraftFeatureItem[];
  align?: "start" | "center";
  minColumnWidth?: number;
  className?: string;
  style?: CSSProperties;
}

export interface HoverkraftProjectCardProps {
  id?: string;
  icon?: ReactNode;
  title: ReactNode;
  titleHref?: string;
  titleTo?: string;
  titleTarget?: "_self" | "_blank" | "_parent" | "_top";
  titleRel?: string;
  meta?: ReactNode;
  description: ReactNode;
  tags?: ReactNode[];
  actions?: HoverkraftAction[];
  accent?: "primary" | "neutral";
  className?: string;
}
