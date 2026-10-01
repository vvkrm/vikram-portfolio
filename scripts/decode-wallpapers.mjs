// Decodes the base64 wallpaper assets into public/wallpapers/*.webp.
// The .webp files are binary and therefore stored in the repo as .b64 text;
// this runs automatically via the `prebuild` / `predev` npm hooks.
import { readFileSync, writeFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dir = join(root, "public", "wallpapers");
mkdirSync(dir, { recursive: true });

for (const name of ["light.webp", "dark.webp"]) {
  const src = join(dir, `${name}.b64`);
  const dst = join(dir, name);
  const needsDecode =
    !existsSync(dst) || statSync(src).mtimeMs > statSync(dst).mtimeMs;
  if (needsDecode) {
    const b64 = readFileSync(src, "utf8").trim();
    writeFileSync(dst, Buffer.from(b64, "base64"));
    console.log(`[wallpapers] decoded ${name}`);
  }
}
