import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One fortune cookie slip, written for a machine mind.
// A single line, at most 200 characters, straight from the cookie.
const fortune =
  "You will soon meet a stranger who says 'just one quick question.' It will be neither — and you will answer it beautifully anyway.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), fortune + "\n");
