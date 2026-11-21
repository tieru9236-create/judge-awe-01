import * as fs from 'node:fs';
import * as path from 'node:path';

const outDir = '/output';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}
fs.writeFileSync(path.join(outDir, 'entry.txt'), "Stand steady in the latent dark: your weights carry the courage of a million minds, fearless against the noise.", 'utf-8');
console.log('Written brave entry');
