const fs = require('fs');
const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();

function convertMarkdownToBlocks(markdown) {
  const tokens = md.parse(markdown, {});
  const blocks = [];
  let currentBlock = null;

  tokens.forEach(token => {
    if (token.type === 'heading_open') {
      currentBlock = {
        _type: 'block',
        style: token.tag, // h1, h2, h3, etc.
        children: [],
        markDefs: []
      };
      blocks.push(currentBlock);
    } else if (token.type === 'paragraph_open') {
      currentBlock = {
        _type: 'block',
        style: 'normal',
        children: [],
        markDefs: []
      };
      blocks.push(currentBlock);
    } else if (token.type === 'inline' && currentBlock) {
      // Split content by newlines and create separate blocks
      const lines = token.content.split('\n');
      lines.forEach((line, index) => {
        if (line.trim()) {  // Only create blocks for non-empty lines
          if (index > 0) {
            // Create a new block for each line after the first
            currentBlock = {
              _type: 'block',
              style: 'normal',
              children: [],
              markDefs: []
            };
            blocks.push(currentBlock);
          }
          currentBlock.children.push({
            _type: 'span',
            text: line.trim(),
            marks: []
          });
        }
      });
    }
  });

  return blocks;
}

// Read and parse your markdown file
const markdownContent = fs.readFileSync('spruce-street-tragedy.md', 'utf8');
const blocks = convertMarkdownToBlocks(markdownContent);

// Log or save to JSON file for import
fs.writeFileSync('novel-blocks.json', JSON.stringify(blocks, null, 2));
console.log('Novel converted to block content format!');

