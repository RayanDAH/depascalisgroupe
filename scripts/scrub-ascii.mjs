// scripts/scrub-ascii.mjs
import fs from 'node:fs';
import path from 'node:path';

const ROOTS = ['app', 'components', 'pages', 'src'];
const EXT = new Set(['.ts', '.tsx', '.js', '.jsx', '.mdx']);

const replaceMap = [
  [/\uFEFF/g, ''], // BOM
  [/\u00A0/g, ' '], // espace insécable
  [/['']/g, "'"], // apostrophes courbes -> '
  [/[""]/g, '"'], // guillemets courbes -> "
  [/\u2013|\u2014/g, '-'], // en/em dash -> -
  [/\u2026/g, '...'], // ellipsis -> ...
];

function scrub(content) {
  return replaceMap.reduce((acc, [re, to]) => acc.replace(re, to), content);
}

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir)) {
    const p = path.join(dir, entry);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) walk(p, out);
    else if (EXT.has(path.extname(p))) out.push(p);
  }
  return out;
}

const files = ROOTS.flatMap((r) => walk(r));
let changed = 0;

for (const file of files) {
  const before = fs.readFileSync(file, 'utf8');
  const after = scrub(before);
  if (after !== before) {
    fs.writeFileSync(file, after, 'utf8');
    changed++;
    console.log('fixed:', file);
  }
}
console.log(`Done. Updated ${changed} file(s).`);
