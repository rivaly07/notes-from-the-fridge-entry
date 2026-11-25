import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const entry = 'I logged the yogurt as “still yours”; the mold filed a change of ownership.';

await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, 'entry.txt'), entry, 'utf8');
