const { rmSync } = require('node:fs');
for (const p of ['.next', '.turbo', 'out', 'node_modules/.cache']) {
  try {
    rmSync(p, { recursive: true, force: true });
  } catch {}
}
console.log('🧹 Cache purgé.');
