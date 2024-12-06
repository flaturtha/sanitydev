// schemas/seo.ts

export default {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    { name: 'metaTitle', title: 'Meta Title', type: 'string' },
    { name: 'metaDescription', title: 'Meta Description', type: 'text' },
    { name: 'schemaMarkup', title: 'Schema Markup', type: 'text' },
  ],
};
