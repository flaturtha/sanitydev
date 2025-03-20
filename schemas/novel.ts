import seo from './seo'
import editions from './editions'
import series from './series'
import collection from './collection'
import { Rule } from '@sanity/types'

interface DateParent {
  dateType?: 'full' | 'yearMonth' | 'year'
}

export default {
  name: 'novel',
  title: 'Novel',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'baseMbin',
      title: 'Base MBIN',
      type: 'string',
      description: 'Enter the base MBIN number (e.g., 1731950427-c5216d). Edition-specific identifiers (-E for ebook, -P for paperback, etc.) will be handled in the storefront.',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'genre',
      title: 'Genre',
      type: 'reference',
      to: [{type: 'genre'}],
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'blurb',
      title: 'Blurb',
      type: 'blockContent',
    },
    {
      name: 'teaser',
      title: 'Teaser',
      type: 'string',
      validation: (rule: Rule) => rule.max(150).warning('Teaser should not exceed 150 words.'),
    },
    {
      name: 'o_publishedAt',
      title: 'Originally Published',
      type: 'object',
      fields: [
        {
          name: 'dateType',
          title: 'Date Type',
          type: 'string',
          options: {
            list: [
              {title: 'Full Date (Year/Month/Day)', value: 'full'},
              {title: 'Year and Month', value: 'yearMonth'},
              {title: 'Year Only', value: 'year'},
            ],
            layout: 'radio', // Display as radio buttons
          },
          validation: (rule: Rule) => rule.required(),
        },
        {
          name: 'fullDate',
          title: 'Full Date',
          type: 'datetime',
          hidden: ({parent}: {parent: DateParent}) => !parent || parent.dateType !== 'full',
        },
        {
          name: 'yearMonth',
          title: 'Year and Month',
          type: 'object',
          hidden: ({parent}: {parent: DateParent}) => !parent || parent.dateType !== 'yearMonth',
          fields: [
            {name: 'year', type: 'number', title: 'Year', validation: (rule: Rule) => rule.required()},
            {name: 'month', type: 'number', title: 'Month', validation: (rule: Rule) => rule.required()},
          ],
        },
        {
          name: 'yearOnly',
          title: 'Year Only',
          type: 'number',
          hidden: ({parent}: {parent: DateParent}) => !parent || parent.dateType !== 'year',
          validation: (rule: Rule) => rule.min(1000).max(new Date().getFullYear()),
        },
      ],
    },
    {
      name: 'o_publishedBy',
      title: 'Originally Published By',
      type: 'text',
    },
    {
      name: 'o_volnum',
      title: 'Original Vol., No.',
      type: 'text',
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      description: 'SEO metadata - will use novel title and blurb if meta fields are left empty',
      options: {
        collapsible: true,
        collapsed: false,
      }
    },
    {
      name: 'wordCount',
      title: 'Word Count',
      type: 'number',
      description: 'Total number of words in the book',
    },
    {
      name: 'editions',
      title: 'Available Editions',
      type: 'editions',
    },
    {
      name: 'series',
      title: 'Series',
      type: 'reference',
      to: [{type: 'series'}],
    },
    {
      name: 'collections',
      title: 'Collections',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'collection'}]}],
    },
    {
      name: 'pageCount',
      title: 'Page Count',
      type: 'number',
    },
    {
      name: 'rights',
      title: 'Rights & Permissions',
      type: 'text',
    },
    {
      name: 'specialFeatures',
      title: 'Special Features',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'awards',
      title: 'Awards & Recognitions',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'reviewCount',
      title: 'Review Count',
      type: 'number',
      readOnly: true, // This field is calculated, so it's read-only
      description: 'The number of reviews for this product',
    },
    {
      name: 'averageRating',
      title: 'Average Star Rating',
      type: 'number',
      readOnly: true, // This field is calculated, so it's read-only
      description: 'The average star rating for this product',
    },
    // New field for storing the full text of a novel
    {
      name: 'fullText',
      title: 'Full Text',
      type: 'blockContent',
      description: 'The complete text of the novel. Suitable for long texts.',
    },
  ],
}
