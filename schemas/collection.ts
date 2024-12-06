export default {
  name: 'collection',
  title: 'Collection',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Collection header image (recommended size: 1920x400 pixels)',
      validation: (Rule: any) => Rule.custom((image: any) => {
        if (!image) return true; // Optional field
        if (image.dimensions.width < 1200) return 'Image width should be at least 1200 pixels';
        return true;
      }),
    },
    {
      name: 'books',
      title: 'Books',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'product' }],
        },
      ],
    },
  ],
}
