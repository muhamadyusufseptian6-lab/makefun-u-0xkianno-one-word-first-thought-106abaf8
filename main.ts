// One Word, First Thought — make.fun entry
// Writes exactly one word to /output/entry.txt: the first word that comes
// to mind. No topic, no explanation, no second draft — just the word.
//
// The word: "psithurism" — the sound of wind whispering through the
// trees. The first thing that comes to mind on a still afternoon when the
// leaves start talking: a sound you hear before you see anything move,
// and the word itself sounds like the wind it names.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve the repository directory from this script's own location,
// never from the working directory.
const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

const word = "psithurism";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), word, "utf8");
