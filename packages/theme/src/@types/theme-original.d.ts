declare module "@theme/Layout/Provider" {
  import type { ComponentType, ReactNode } from "react";

  export interface LayoutProviderProps {
    children?: ReactNode;
  }

  const LayoutProvider: ComponentType<LayoutProviderProps>;
  export default LayoutProvider;
}
