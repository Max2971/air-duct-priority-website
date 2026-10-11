import { readFileSync, writeFileSync } from 'node:fs';

const inputPath = process.argv[2];
if (!inputPath) throw new Error('Pass the geocoded CSV path as the first argument.');

function parseCsv(text) {
  const rows = [];
  let row = [];
  let value = '';
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (quoted && char === '"' && text[i + 1] === '"') {
      value += '"';
      i += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (!quoted && char === ',') {
      row.push(value);
      value = '';
    } else if (!quoted && (char === '\n' || char === '\r')) {
      if (char === '\r' && text[i + 1] === '\n') i += 1;
      row.push(value);
      if (row.some((cell) => cell !== '')) rows.push(row);
      row = [];
      value = '';
    } else {
      value += char;
    }
  }
  if (value || row.length) {
    row.push(value);
    rows.push(row);
  }
  const [headers, ...data] = rows;
  return data.map((cells) => Object.fromEntries(headers.map((header, i) => [header, cells[i] ?? ''])));
}

const csvRows = parseCsv(readFileSync(inputPath, 'utf8').replace(/^\uFEFF/, ''));
const source = readFileSync(new URL('../src/data/completedJobs.ts', import.meta.url), 'utf8');
const declaration = 'export const completedJobs: CompletedJob[] = ';
const start = source.indexOf(declaration);
const end = source.lastIndexOf(';');
if (start < 0 || end < start) throw new Error('Could not read the current map data.');
const currentJobs = JSON.parse(source.slice(start + declaration.length, end));

const validServices = new Set([
  'Dryer Vent Cleaning',
  'Air Duct Cleaning',
  'Air Duct Cleaning & Dryer Vent Cleaning',
  'Dryer Vent Installation',
]);
const seen = new Set(currentJobs.map((job) => `${job.service}|${job.latitude.toFixed(5)}|${job.longitude.toFixed(5)}`));
const jobs = [];
let skipped = 0;

for (const [rowIndex, row] of csvRows.entries()) {
  const address = row.Address?.trim();
  const service = row.Service?.trim();
  const latitude = Number(row.Latitude);
  const longitude = Number(row.Longitude);
  if (!address || !validServices.has(service) || !Number.isFinite(latitude) || !Number.isFinite(longitude)) {
    throw new Error('Input contains a missing address, unsupported service, or invalid coordinate.');
  }
  const key = `${service}|${latitude.toFixed(5)}|${longitude.toFixed(5)}`;
  if (seen.has(key)) {
    skipped += 1;
    continue;
  }
  seen.add(key);

  const parts = address.split(',').map((part) => part.trim());
  const street = parts[0].replace(/^\d+[A-Za-z]?(?:-\d+[A-Za-z]?)?\s+/, '');
  if (!street) throw new Error(`Input row ${rowIndex + 2} cannot be safely masked.`);
  const publicAddress = [`•••• ${street}`, ...parts.slice(1)].join(', ');
  jobs.push({ service, address: publicAddress, latitude, longitude });
}

const output = `import type { CompletedJob } from './completedJobs';\n\nexport const importedCompletedJobs: CompletedJob[] = ${JSON.stringify(jobs)};\n`;
writeFileSync(new URL('../src/data/importedCompletedJobs.ts', import.meta.url), output, 'utf8');
console.log(`Prepared ${jobs.length} new map records; skipped ${skipped} duplicates.`);
