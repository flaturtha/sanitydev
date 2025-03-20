export default {
  name: 'editions',
  title: 'Editions',
  type: 'object',
  fields: [
    {
      name: 'ebook',
      title: 'eBook (Kindle + ePub)',
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
          name: 'mbin',
          title: 'MBIN',
          type: 'string',
        },
      ],
    },
    {
      name: 'novelPaperback',
      title: 'Novel Paperback (5x8", 10pt)',
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
          name: 'mbin',
          title: 'MBIN',
          type: 'string',
        },
      ],
    },
    {
      name: 'a5Paperback',
      title: 'A5 Paperback (5.8x8.3", 11pt)',
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
          name: 'mbin',
          title: 'MBIN',
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
          name: 'mbin',
          title: 'MBIN',
          type: 'string',
        },
      ],
    },
    {
      name: 'bespokeHardcover',
      title: 'Bespoke Hardcover (9.21x6.14", 12pt)',
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
          name: 'mbin',
          title: 'MBIN',
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
          name: 'mbin',
          title: 'MBIN',
          type: 'string',
        },
      ],
    },
    {
      name: 'freeOnline',
      title: 'Free Online Version',
      type: 'object',
      fields: [
        {
          name: 'available',
          title: 'Available',
          type: 'boolean',
        },
        {
          name: 'url',
          title: 'URL',
          type: 'url',
          description: 'Link to the free online version',
        },
      ],
    },
  ],
}

// perhaps just make this a list of variants/edtions and boolean checkboxes to tag the variant as available or not