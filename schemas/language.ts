// schemas/language.ts
export default {
  name: 'language',
  title: 'Language',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'code',
      title: 'Language Code',
      type: 'string',
      description: 'ISO 639-1 Code (e.g., "en" for English, "de" for German)',
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
