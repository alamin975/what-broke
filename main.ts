import { mkdirSync, writeFileSync } from "node:fs";

// The line below must stay byte-for-byte: a single line, no trailing newline.
const LINE =
  "Something broke. Not your fault, not mine — the server just gave up halfway through and left us both here.";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf8" });
}

writeEntry();
