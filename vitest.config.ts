import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const workspaceRoot = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      "@docusaurus/Link": path.resolve(
        workspaceRoot,
        "packages/theme/src/test-utils/docusaurusLinkMock.tsx",
      ),
      "@docusaurus/useBaseUrl": path.resolve(
        workspaceRoot,
        "packages/theme/src/test-utils/docusaurusUseBaseUrlMock.ts",
      ),
    },
  },
  test: {
    coverage: {
      provider: "v8",
    },
    environment: "jsdom",
    globals: true,
    setupFiles: [path.resolve(workspaceRoot, "vitest.setup.ts")],
  },
});
