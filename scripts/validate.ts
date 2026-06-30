/**
 * Content validation CLI.
 *
 *   npm run validate
 *
 * Runs the same schema + referential-integrity checks the build enforces, plus
 * article-frontmatter validation and an MDX-toolchain smoke test, and prints a
 * readable report. Exits non-zero on any failure so it can gate CI.
 */
import { execFileSync } from "node:child_process";
import path from "node:path";
import { runValidation } from "@/lib/validate-content";
import { getAllArticles } from "@/lib/article-fs";

const RESET = "\x1b[0m";
const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const DIM = "\x1b[2m";
const BOLD = "\x1b[1m";

function heading(s: string) {
  console.log(`\n${BOLD}${s}${RESET}`);
}

async function main() {
  let failed = false;

  heading("War Thunder Codex — content validation");

  // 1) Data collections: schema + referential integrity.
  const report = runValidation();
  console.log(`${DIM}data collections${RESET}`);
  for (const [name, n] of Object.entries(report.counts)) {
    console.log(`  ${name.padEnd(10)} ${n}`);
  }
  if (report.ok) {
    console.log(`${GREEN}✓ all records valid${RESET}`);
  } else {
    failed = true;
    console.log(`${RED}✗ ${report.issues.length} issue(s):${RESET}`);
    for (const issue of report.issues) {
      console.log(`  ${RED}•${RESET} [${issue.collection}${issue.id ? ` ${issue.id}` : ""}] ${issue.message}`);
    }
  }
  if (report.warnings.length > 0) {
    console.log(`${YELLOW}⚠ ${report.warnings.length} non-fatal reference warning(s) (target seeded in a later phase):${RESET}`);
    for (const w of report.warnings) {
      console.log(`  ${YELLOW}•${RESET} [${w.collection}${w.id ? ` ${w.id}` : ""}] ${w.message}`);
    }
  }

  // 2) Article frontmatter (throws on invalid frontmatter / duplicate slugs).
  heading("articles");
  try {
    const articles = await getAllArticles();
    console.log(`  articles   ${articles.length}`);
    console.log(`${GREEN}✓ all article frontmatter valid${RESET}`);
  } catch (err) {
    failed = true;
    console.log(`${RED}✗ ${(err as Error).message}${RESET}`);
  }

  // 3) MDX toolchain smoke test — runs in a real Node process (see mdx-smoke.mjs).
  heading("mdx toolchain");
  try {
    const out = execFileSync("node", [path.join("scripts", "mdx-smoke.mjs")], {
      encoding: "utf8",
    });
    if (!out.includes("MDX_OK")) throw new Error(out.trim());
    console.log(`${GREEN}✓ MDX compiles${RESET}`);
  } catch (err) {
    failed = true;
    const msg = err instanceof Error ? err.message : String(err);
    console.log(`${RED}✗ MDX failed to compile: ${msg}${RESET}`);
  }

  console.log("");
  if (failed) {
    console.log(`${RED}${BOLD}Validation failed.${RESET}`);
    process.exit(1);
  }
  console.log(`${GREEN}${BOLD}Validation passed.${RESET} ${YELLOW}Accuracy bar holds.${RESET}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
