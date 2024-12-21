const fs = require('fs');
const path = require('path');

const BASE_PATH = path.resolve(__dirname, '..', '..');
const CHANGED_FILES_PATH = path.join(
  BASE_PATH,
  'changed-files',
  'changed-files.txt',
);

/**
 * Reads the list of changed files from the git diff file.
 *
 * @returns {<string[]>} An array of changed file paths.
 */
function readChangedFiles() {
  try {
    const data = fs.readFileSync(CHANGED_FILES_PATH, 'utf8');
    const changedFiles = data.split('\n');
    return changedFiles;
  } catch (error) {
    if (error.code !== 'ENOENT') {
      console.error('Error reading from file:', error);
    }
    return [];
  }
}

/**
 * Filters the list of changed files to include only E2E test files within the 'test/e2e/' directory.
 *
 * @returns {<string[]>} An array of filtered E2E test file paths.
 */
function filterE2eChangedFiles() {
  const changedFiles = readChangedFiles();
  const e2eChangedFiles = changedFiles
    .filter(
      (file) =>
        file.startsWith('test/e2e/') &&
        (file.endsWith('.spec.js') || file.endsWith('.spec.ts')),
    )
    .map((file) => `${BASE_PATH}/${file}`);
  return e2eChangedFiles;
}

/**
 * Triggers the appropriate tests based on the changed files.
 *
 * @param {<string[]>} changedFiles - An array of changed file paths.
 * @returns {<string[]>} An array of test file paths to be executed.
 */
function triggerAppropriateTests(changedFiles) {
  const testFiles = filterE2eChangedFiles(changedFiles);
  // Add logic to trigger the appropriate tests based on the changed files
  return testFiles;
}

module.exports = { filterE2eChangedFiles, readChangedFiles, triggerAppropriateTests };
