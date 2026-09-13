import fs from 'fs';
import path from 'path';

const root = process.cwd();
const srcDir = path.join(root, 'src');

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }

    if (!['.ts', '.tsx', '.js', '.jsx'].includes(path.extname(entry.name))) {
      continue;
    }

    const text = fs.readFileSync(fullPath, 'utf8');
    const updated = text.replace(/\/\[([0-9]+(?:\.[0-9]+)?)\]/g, (_, raw) => {
      const value = Number(raw) * 100;
      return `/${String(value).replace(/\.0+$/, '')}`;
    });

    if (updated !== text) {
      fs.writeFileSync(fullPath, updated, 'utf8');
      console.log(`updated ${path.relative(root, fullPath)}`);
    }
  }
}

walk(srcDir);
