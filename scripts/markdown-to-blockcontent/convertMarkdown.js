const blockTools = require('@sanity/block-tools');
const markdownIt = require('markdown-it');
const fs = require('fs');
const readline = require('readline');

// Custom definition of the blockContent schema
const blockContentSchema = {
  name: 'blockContent',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'URL',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
              },
              {
                name: 'blank',
                type: 'boolean',
                title: 'Open in new tab',
              },
            ],
          },
        ],
      },
    },
    // Add other types like images, code blocks, etc., here if needed
  ],
};

// Setup readline interface to prompt for file input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const md = markdownIt();

// Prompt for the file path
rl.question('Please enter the path to the Markdown file: ', function (filePath) {
  // Read the Markdown file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      rl.close();
      return;
    }

    // Convert Markdown to HTML
    const html = md.render(data);

    // Convert HTML to blockContent using the custom blockContent schema
    try {
      const blockContent = blockTools.htmlToBlocks(html, blockContentSchema);

      // Define output file path
      const outputFilePath = filePath.replace('.md', '-blockContent.json');

      // Save the blockContent JSON to a file
      fs.writeFile(outputFilePath, JSON.stringify(blockContent, null, 2), (err) => {
        if (err) {
          console.error('Error writing the output file:', err);
        } else {
          console.log(`Converted blockContent JSON saved to ${outputFilePath}`);
        }

        // Close the readline interface
        rl.close();
      });
    } catch (conversionError) {
      console.error('Error converting HTML to blockContent:', conversionError);
      rl.close();
    }
  });
});
