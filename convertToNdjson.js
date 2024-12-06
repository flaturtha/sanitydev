const fs = require('fs');

// Load the JSON document file
const jsonData = JSON.parse(fs.readFileSync('novel-blocks.json', 'utf8'));

// Convert the single document to NDJSON format
const ndjson = JSON.stringify(jsonData) + '\n';

// Write the ndjson to a new file
fs.writeFileSync('novel-blocks.ndjson', ndjson);
console.log("Conversion to ndjson complete!");

