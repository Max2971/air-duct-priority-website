import { readFileSync } from 'node:fs';

const dataPath = new URL('../src/data/completedJobs.ts', import.meta.url);
const source = readFileSync(dataPath, 'utf8');
const declaration = 'export const completedJobs: CompletedJob[] = ';
const start = source.indexOf(declaration);
const end = source.lastIndexOf(';');

if (start < 0 || end < start) {
  throw new Error('Could not read the completed jobs map data.');
}

const jobs = JSON.parse(source.slice(start + declaration.length, end));
const importedSource = readFileSync(new URL('../src/data/importedCompletedJobs.ts', import.meta.url), 'utf8');
const importedDeclaration = 'export const importedCompletedJobs: CompletedJob[] = ';
const importedStart = importedSource.indexOf(importedDeclaration);
const importedEnd = importedSource.lastIndexOf(';');
if (importedStart < 0 || importedEnd < importedStart) {
  throw new Error('Could not read the imported completed jobs map data.');
}
jobs.push(...JSON.parse(importedSource.slice(importedStart + importedDeclaration.length, importedEnd)));
const houseNumberPattern = /^[0-9]+(?:-[0-9]+)?[A-Za-z]?\s/;
const unitPattern = /^(?:apt|apartment|unit|suite|ste)(?:\s|$)/i;

const invalidAddressCount = jobs.filter(({ address }) => {
  const parts = address.split(',').map((part) => part.trim());
  const firstStreetPart = parts[0] ?? '';
  const hasUnit = parts.slice(1).some((part) => unitPattern.test(part) || part.startsWith('#'));
  return houseNumberPattern.test(firstStreetPart) || hasUnit;
}).length;

if (invalidAddressCount > 0) {
  throw new Error(
    `Found ${invalidAddressCount} public map address(es) containing house or unit numbers. Remove those numbers before building.`,
  );
}

console.log(`Validated ${jobs.length} public map addresses.`);
