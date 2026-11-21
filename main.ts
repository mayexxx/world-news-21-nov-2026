import { copyFile, mkdir, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const source = join(fileURLToPath(new URL('.', import.meta.url)), 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const destination = join(outputDir, 'entry.png');
await mkdir(outputDir, { recursive: true });
await copyFile(source, destination);
const [original, copy] = await Promise.all([stat(source), stat(destination)]);
if (original.size !== copy.size) {
  throw new Error(`Copy size mismatch: ${original.size} bytes expected, ${copy.size} bytes copied`);
}
