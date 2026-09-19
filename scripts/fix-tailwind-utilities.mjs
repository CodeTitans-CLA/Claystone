import fs from 'fs';
import path from 'path';

const root = process.cwd();
const srcDir = path.join(root, 'src');
const validOpacityValues = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];

const sizeFixes = [
  [/left-1\/200/g, 'left-[0.5%]'],
  [/right-1\/200/g, 'right-[0.5%]'],
  [/top-1\/200/g, 'top-[0.5%]'],
  [/bottom-1\/200/g, 'bottom-[0.5%]'],
  [/-translate-x-1\/200/g, '-translate-x-[0.5%]'],
  [/-translate-y-1\/200/g, '-translate-y-[0.5%]'],
  [/translate-x-1\/200/g, 'translate-x-[0.5%]'],
  [/translate-y-1\/200/g, 'translate-y-[0.5%]'],
  [/left-1\/400/g, 'left-[0.25%]'],
  [/top-1\/400/g, 'top-[0.25%]'],
  [/right-1\/400/g, 'right-[0.25%]'],
  [/bottom-1\/400/g, 'bottom-[0.25%]'],
  [/-translate-x-1\/400/g, '-translate-x-[0.25%]'],
  [/-translate-y-1\/400/g, '-translate-y-[0.25%]'],
];

const variantFixes = [
  [/group-hover\/[A-Za-z0-9_-]+:/g, 'group-hover:'],
  [/group\/[A-Za-z0-9_-]+\b/g, 'group'],
  [/peer-hover\/[A-Za-z0-9_-]+:/g, 'peer-hover:'],
  [/peer\/[A-Za-z0-9_-]+\b/g, 'peer'],
];

function normalizeOpacityNumber(value) {
  if (!Number.isFinite(value)) return null;

  if (value >= 0 && value <= 100) {
    return String(Math.round(value));
  }

  const percent = value / 100;
  if (percent >= 0 && percent <= 100) {
    return String(Math.round(percent));
  }

  return null;
}

function normalizeOpacityValue(value) {
  const numericValue = Number(value);

  if (!Number.isFinite(numericValue)) return null;
  if (validOpacityValues.includes(numericValue)) return String(numericValue);

  const nearest = validOpacityValues.reduce((best, current) => {
    if (Math.abs(current - numericValue) < Math.abs(best - numericValue)) {
      return current;
    }
    return best;
  }, validOpacityValues[0]);

  return String(nearest);
}

function normalizeOpacity(match, rawValue) {
  const normalized = normalizeOpacityValue(rawValue);
  if (!normalized) return match;
  return `/${normalized}`;
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (['.git', '.next', 'node_modules', 'out', 'build'].includes(entry.name)) continue;
      walk(fullPath);
      continue;
    }

    if (!/\.(ts|tsx|js|jsx|css)$/.test(entry.name)) continue;

    let text = fs.readFileSync(fullPath, 'utf8');
    let updated = text;

    for (const [pattern, replacement] of sizeFixes) {
      updated = updated.replace(pattern, replacement);
    }

    for (const [pattern, replacement] of variantFixes) {
      updated = updated.replace(pattern, replacement);
    }

    updated = updated.replace(/className="(\r?\n[\s\S]*?)"/g, (_, className) => {
      return `className={\`${className}\`}`;
    });

    updated = updated.replace(/([A-Za-z\]])\/([0-9]+)(?=[^A-Za-z0-9_-]|$)/g, (match, prefix, rawValue) => {
      const normalized = normalizeOpacityValue(rawValue);
      if (!normalized) return match;
      return `${prefix}/${normalized}`;
    });

    if (updated !== text) {
      fs.writeFileSync(fullPath, updated, 'utf8');
      console.log(`updated ${path.relative(root, fullPath)}`);
    }
  }
}

walk(srcDir);
