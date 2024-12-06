const fs = require('fs');
const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();

function convertMarkdownToBlocks(markdown) {
  const tokens = md.parse(markdown, {});
  const blocks = [];

  tokens.forEach(token => {
    if (token.type === 'heading_open') {
      let style = 'normal';
      switch (token.tag) {
        case 'h1': style = 'h1'; break;
        case 'h2': style = 'h2'; break;
        case 'h3': style = 'h3'; break;
        case 'h4': style = 'h4'; break;
        // Add more cases if you have deeper levels.
      }
      blocks.push({ _type: 'block', style: style, children: [] });
    }
    if (token.type === 'inline') {
      const currentBlock = blocks[blocks.length - 1];
      currentBlock.children.push({ _type: 'span', text: token.content });
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

