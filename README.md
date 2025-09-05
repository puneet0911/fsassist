# fsassist

A simple and lightweight **File System Helper** utility for Node.js, offering recursive file search, safe file writing, and JSON file reading. Simplify your file system operations with easy-to-use functions.

## Features

- Recursively find files by extension
- Safely write files with automatic directory creation
- Read and parse JSON files safely

## Installation

Install with npm:

npm install fsassist


## Usage

const { findFilesByExtension, safeWriteFile, readJsonFile } = require("fsassist");

// Find all .js files recursively in the current directory
const jsFiles = findFilesByExtension(__dirname, ".js");
console.log("JS files:", jsFiles);

// Write data safely to a file (creates directory if missing)
safeWriteFile("./output/hello.txt", "Hello, fsassist!");

// Read and parse a JSON file safely
const config = readJsonFile("./package.json");
console.log("Config:", config);



## API Reference

### findFilesByExtension(dir: string, ext: string): string[]

Recursively search a directory and return a list of absolute paths for files matching the extension `ext`.

### safeWriteFile(filePath: string, data: string | Buffer | Uint8Array): void

Write data to a file, creating any missing directories in the provided `filePath`.

### readJsonFile(filePath: string): Object \| null

Reads and parses a JSON file, returning the object or `null` if reading/parsing fails.

## Requirements

- Node.js v14 or higher

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page or submit a pull request.

## License

This project is licensed under the MIT License.

## Author

[Puneet Sharma](https://github.com/puneet0911)
