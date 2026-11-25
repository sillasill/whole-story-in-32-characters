import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 32;
const TEXT = "MyExChangedThePassword";

function main(): void {
  if (TEXT.length < 1 || TEXT.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${TEXT.length}`);
  }
  if (TEXT.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (TEXT.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", TEXT, "utf8");
}

main();
