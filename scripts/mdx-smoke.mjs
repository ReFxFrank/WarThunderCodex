// Standalone MDX-toolchain smoke test, run under plain Node (the same runtime
// the Next build uses) to sidestep the tsx resolver quirk with @mdx-js/mdx's
// transitive deps. Exits non-zero if MDX fails to compile.
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

const sample = "# Smoke test\n\nThe **MDX** pipeline compiles to a component.";

try {
  const mod = await evaluate(sample, { ...runtime, baseUrl: import.meta.url });
  if (typeof mod.default !== "function") throw new Error("no default component produced");
  console.log("MDX_OK");
} catch (err) {
  console.error("MDX_FAIL", err?.message ?? err);
  process.exit(1);
}
