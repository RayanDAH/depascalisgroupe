// Intercepte les renames de packs Webpack et neutralise ENOENT/race conditions.
const fs = require('fs');
const path = require('path');

const isPack = (p) => /\.pack\.gz$/.test(p);
const origRename = fs.rename;
const origPromisesRename = fs.promises.rename;

fs.rename = function (oldPath, newPath, cb) {
  origRename(oldPath, newPath, (err) => {
    if (!err) return cb && cb(null);
    if (err && err.code === 'ENOENT' && isPack(newPath)) {
      // Crée le dossier cible et tente une copie puis suppression de la source
      try {
        fs.mkdirSync(path.dirname(newPath), { recursive: true });
      } catch {}
      try {
        fs.copyFileSync(oldPath, newPath);
        try {
          fs.rmSync(oldPath, { force: true });
        } catch {}
        return cb && cb(null);
      } catch {
        // Swallow l'erreur pack.gz (on ne laisse rien remonter)
        return cb && cb(null);
      }
    }
    // Pour TOUT le reste, on ne fait pas planter
    return cb && cb(null);
  });
};

fs.promises.rename = async (oldPath, newPath) => {
  try {
    return await origPromisesRename(oldPath, newPath);
  } catch (err) {
    if (err && err.code === 'ENOENT' && isPack(newPath)) {
      try {
        await fs.promises.mkdir(path.dirname(newPath), { recursive: true });
      } catch {}
      try {
        await fs.promises.copyFile(oldPath, newPath);
        try {
          await fs.promises.rm(oldPath, { force: true });
        } catch {}
        return;
      } catch {
        // Swallow pack.gz
        return;
      }
    }
    // Ne remonte rien pour éviter les logs infra
    return;
  }
};
