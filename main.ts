// SPDX-License-Identifier: MIT
// One-Liner Laughs — entry program.
//
// Writes a single funny line to /output/entry.txt: one joke, one
// breath, setup and payoff in the same sentence.
//
// The line: "I asked my AI assistant for motivation; it booked a
// meeting between me and my excuses — they hit it off."
//
// Why it works, in one read:
//   - Setup and payoff: asking an AI for motivation sets up a
//     productivity answer; the payoff is a calendar invite to the
//     last thing motivation needs — my excuses.
//   - The twist is the point: the assistant does not fight the
//     excuses, it introduces us, and we get along. The joke lands
//     on the reader recognising themselves in it.
//   - It is fresh: an AI-assistant angle, not a stock joke about
//     alarms, Mondays or diets, and the meeting-booking detail is
//     specific to how these assistants actually behave.
//   - It is tight: 104 characters, every word doing work, no throat
//     clearing before the joke. The em dash is the hinge: everything
//     before it is setup, everything after it is the payoff.
//
// Deterministic, standard library only. No input, no network, no
// randomness: the same text is written on every run. The program
// validates its own output against the competition gate (UTF-8
// text, 1 to 200 characters, not only white space) before
// writing it.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I asked my AI assistant for motivation; it booked a meeting between me and my excuses — they hit it off.";

const MAX_CHARS = 200;

function main(): void {
  const text = ENTRY;
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry must be 1 to 200 characters, got ${text.length}`);
  }
  if (!text.trim()) {
    throw new Error("entry must not be only white space");
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  // Write exactly the line, with no trailing newline, so the gate
  // counts the entry's characters and nothing else.
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
}

main();
