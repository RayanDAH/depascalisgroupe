const fs = require('fs');
['./.next/cache', './.turbo'].forEach((p) => {
  try {
    fs.rmSync(p, { recursive: true, force: true });
  } catch {}
});
console.log('Caches Next/Turbo purgés.');
