export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent', // For long text content
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Product price in cents (integer)',
      validation: (Rule) => Rule.required().positive(),
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'variants',
      title: 'Variants',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Variant Name',
              type: 'string',
            },
            {
              name: 'sku',
              title: 'SKU',
              type: 'string',
            },
            {
              name: 'price',
              title: 'Price',
              type: 'number',
              description: 'Variant price in cents (integer)',
              validation: (Rule) => Rule.required().positive(),
            },
          ],
        },
      ],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Product tags for Shopify',
    },
  ],
};

