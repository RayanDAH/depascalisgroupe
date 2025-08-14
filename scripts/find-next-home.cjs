// scripts/find-next-home.cjs
const fs = require('fs');
const path = require('path');

const ROOTS = [
  'app',
  'components',
  'pages',
  'lib',
  'src',
  'next.config.js',
  'next.config.mjs',
];

const hits = [];

function walk(p) {
  if (!fs.existsSync(p)) return;
  const stat = fs.statSync(p);
  if (stat.isDirectory()) {
    for (const f of fs.readdirSync(p)) walk(path.join(p, f));
  } else {
    const exts = ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs', '.json'];
    if (
      !exts.includes(path.extname(p)) &&
      !p.endsWith('next.config.js') &&
      !p.endsWith('next.config.mjs')
    )
      return;
    const txt = fs.readFileSync(p, 'utf8');
    if (txt.includes('next-home/project')) {
      const lines = txt.split(/\r?\n/);
      lines.forEach((l, i) => {
        if (l.includes('next-home/project'))
          hits.push(`${p}:${i + 1}: ${l.trim()}`);
      });
    }
  }
}

for (const r of ROOTS) walk(r);

if (!hits.length) {
  console.log("✅ Aucun import 'next-home/project' trouvé.");
  process.exit(0);
}
console.log('❌ Occurrences trouvées :\n');
console.log(hits.join('\n'));
process.exit(1);
