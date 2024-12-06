const fs = require('fs');
const MarkdownIt = require('markdown-it');

// Initialize markdown-it
const md = new MarkdownIt();

// Function to read markdown file and convert to Portable Text
function convertMarkdownToPortableText(inputFile, outputFile) {
  // Read the markdown file
  const markdownText = fs.readFileSync(inputFile, 'utf8');

  // Convert markdown to HTML
  const htmlContent = md.render(markdownText);

  // Manually create Portable Text from HTML (this is an example, you may need a more complex parser depending on your needs)
  const blocks = [
    {
      _type: 'block',
      style: 'normal',
      children: [{ _type: 'span', text: htmlContent, marks: [] }],
    },
  ];

  // Convert blocks to JSON format
  const jsonOutput = JSON.stringify(blocks, null, 2);

  // Write the output to a JSON file
  fs.writeFileSync(outputFile, jsonOutput);

  console.log(`Converted ${inputFile} to Portable Text and saved as ${outputFile}`);
}

// Get input file and output file from command line arguments
const inputFile = process.argv[2];
const outputFile = process.argv[3];

// Ensure both input and output files are provided
if (!inputFile || !outputFile) {
  console.error('Please provide an input markdown file and an output JSON file.');
  console.error('Usage: node convert.js input.md output.json');
  process.exit(1);
}

// Convert the markdown file
convertMarkdownToPortableText(inputFile, outputFile);
