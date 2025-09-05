const fs = require("fs");
const path = require("path");

/**
 * Recursively find all files with a given extension in a directory
 * @param {string} dir - The directory to search in
 * @param {string} ext - The file extension to look for (e.g. '.js')
 * @returns {string[]} - Array of absolute file paths
 */
function findFilesByExtension(dir, ext) {
  let results = [];

  function search(currentPath) {
    const filesAndDirs = fs.readdirSync(currentPath, { withFileTypes: true });

    for (const entry of filesAndDirs) {
      const fullPath = path.join(currentPath, entry.name);
      if (entry.isDirectory()) {
        search(fullPath);
      } else if (entry.isFile() && path.extname(entry.name) === ext) {
        results.push(fullPath);
      }
    }
  }
  
  search(dir);
  return results;
}

/**
 * Safely write data to a file ensuring the directory exists
 * @param {string} filePath - The full path of the file to write
 * @param {string|Buffer|Uint8Array} data - Data to write to the file
 */
function safeWriteFile(filePath, data) {
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, data);
}

/**
 * Read and parse a JSON file safely
 * @param {string} filePath
 * @returns {Object|null} Parsed JSON object, or null on failure
 */
function readJsonFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    return JSON.parse(content);
  } catch (err) {
    return null;
  }
}

module.exports = {
  findFilesByExtension,
  safeWriteFile,
  readJsonFile,
};
