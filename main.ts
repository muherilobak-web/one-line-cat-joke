// Entry for make.fun bounty "The One-Line Cat Joke That Lands":
// writes one 104-character cat joke line to /output/entry.txt, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_LINE =
  "My cat gave me my annual review: excellent at opening cans, but my mind-reading skills need improvement.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_LINE, "utf8");
