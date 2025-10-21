// Reserved for future custom Docusaurus type declarations.

declare module "*.svg" {
  import type { ComponentType, SVGProps } from "react";

  type SvgComponent = ComponentType<SVGProps<SVGSVGElement>>;

  const content: string | SvgComponent;
  export default content;
}
