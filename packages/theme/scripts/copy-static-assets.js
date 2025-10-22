#!/usr/bin/env node

const fs = require("node:fs/promises");
const path = require("node:path");

const PROJECT_ROOT = path.join(__dirname, "..");
const SOURCE_DIR = path.join(PROJECT_ROOT, "src");
const OUTPUT_DIR = path.join(PROJECT_ROOT, "lib");
const ASSET_EXTENSIONS = new Set([".css", ".svg", ".ico"]);

async function ensureDirectoryExists(directoryPath) {
  await fs.mkdir(directoryPath, { recursive: true });
}

async function copyFile(source, destination) {
  await ensureDirectoryExists(path.dirname(destination));
  await fs.copyFile(source, destination);
}

async function processDirectory(currentSourceDir) {
  const entries = await fs.readdir(currentSourceDir, { withFileTypes: true });

  await Promise.all(
    entries.map(async (entry) => {
      const absoluteSourcePath = path.join(currentSourceDir, entry.name);
      const relativePath = path.relative(SOURCE_DIR, absoluteSourcePath);
      const absoluteDestinationPath = path.join(OUTPUT_DIR, relativePath);

      if (entry.isDirectory()) {
        await processDirectory(absoluteSourcePath);
        return;
      }

      if (!entry.isFile()) {
        return;
      }

      const extension = path.extname(entry.name).toLowerCase();

      if (!ASSET_EXTENSIONS.has(extension)) {
        return;
      }

      await copyFile(absoluteSourcePath, absoluteDestinationPath);
    })
  );
}

async function main() {
  await processDirectory(SOURCE_DIR);
}

main().catch((error) => {
  console.error("Failed to copy static assets:", error);
  process.exitCode = 1;
});
