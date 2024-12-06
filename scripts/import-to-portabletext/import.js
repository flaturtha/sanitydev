const sanityClient = require('@sanity/client');
const fs = require('fs');

// Initialize the Sanity client
const client = sanityClient({
  projectId: 'joet3wd5',
  dataset: 'production',
  token: 'your-token', // Optional if you have a token for write access
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: '2023-08-16',
});

// Read the output.json file
const portableText = JSON.parse(fs.readFileSync('output.json', 'utf8'));

// Define your new document
const doc = {
  _type: 'article',
  title: 'Imported Article',
  body: portableText, // Assign the Portable Text to the body field
};

// Create or replace the document in Sanity
client.createOrReplace(doc).then((res) => {
  console.log(`Document created or replaced: ${res._id}`);
});
