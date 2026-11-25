import { mkdir, rename, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { Buffer } from 'node:buffer';

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const outputPath = join(outputDirectory, 'entry.txt');
const temporaryPath = join(outputDirectory, '.entry.txt.tmp');
const entry = 'I logged the yogurt as “still yours”; the mold filed a change of ownership.';
const encodedEntry = Buffer.from(entry, 'utf8');

if (encodedEntry.length < 1 || encodedEntry.length > 200 || /[\r\n]/u.test(entry) || entry.trim().length === 0) {
  throw new Error('Entry must be a single line of 1–200 characters');
}

await mkdir(outputDirectory, { recursive: true });
await writeFile(temporaryPath, encodedEntry);
await rename(temporaryPath, outputPath);
