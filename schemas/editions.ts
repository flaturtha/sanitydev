export default {
  name: 'editions',
  title: 'Editions',
  type: 'object',
  fields: [
    {
      name: 'epub',
      title: 'ePub',
      type: 'object',
      fields: [
        {
          name: 'available',
          title: 'Available',
          type: 'boolean',
        },
        {
          name: 'price',
          title: 'Price',
          type: 'number',
        },
        {
          name: 'size',
          title: 'File Size (MB)',
          type: 'number',
        },
        {
          name: 'isbn',
          title: 'ISBN or Identifier',
          type: 'string',
        },
      ],
    },
    {
      name: 'kindle',
      title: 'Kindle',
      type: 'object',
      fields: [
        {
          name: 'available',
          title: 'Available',
          type: 'boolean',
        },
        {
          name: 'price',
          title: 'Price',
          type: 'number',
        },
        {
          name: 'size',
          title: 'File Size (MB)',
          type: 'number',
        },
        {
          name: 'isbn',
          title: 'ISBN or Identifier',
          type: 'string',
        },
      ],
    },
    {
      name: 'paperback',
      title: 'Paperback',
      type: 'object',
      fields: [
        {
          name: 'available',
          title: 'Available',
          type: 'boolean',
        },
        {
          name: 'price',
          title: 'Price',
          type: 'number',
        },
        {
          name: 'pages',
          title: 'Number of Pages',
          type: 'number',
        },
        {
          name: 'isbn',
          title: 'ISBN or Identifier',
          type: 'string',
        },
      ],
    },
    {
      name: 'largePrint',
      title: 'Large Print Paperback',
      type: 'object',
      fields: [
        {
          name: 'available',
          title: 'Available',
          type: 'boolean',
        },
        {
          name: 'price',
          title: 'Price',
          type: 'number',
        },
        {
          name: 'pages',
          title: 'Number of Pages',
          type: 'number',
        },
        {
          name: 'isbn',
          title: 'ISBN or Identifier',
          type: 'string',
        },
      ],
    },
    {
      name: 'hardcover',
      title: 'Hardcover',
      type: 'object',
      fields: [
        {
          name: 'available',
          title: 'Available',
          type: 'boolean',
        },
        {
          name: 'price',
          title: 'Price',
          type: 'number',
        },
        {
          name: 'pages',
          title: 'Number of Pages',
          type: 'number',
        },
        {
          name: 'isbn',
          title: 'ISBN or Identifier',
          type: 'string',
        },
      ],
    },
    {
      name: 'audiobook',
      title: 'Audiobook',
      type: 'object',
      fields: [
        {
          name: 'available',
          title: 'Available',
          type: 'boolean',
        },
        {
          name: 'price',
          title: 'Price',
          type: 'number',
        },
        {
          name: 'duration',
          title: 'Duration (hours)',
          type: 'number',
        },
        {
          name: 'isbn',
          title: 'ISBN or Identifier',
          type: 'string',
        },
      ],
    },
  ],
}
