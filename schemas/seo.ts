// schemas/seo.ts
import { Rule } from '@sanity/types'

export default {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    { 
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Defaults to the novel title if left empty',
      options: {
        source: 'title'
      }
    },
    { 
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description: 'Defaults to the novel blurb if left empty',
      options: {
        source: 'blurb'
      }
    },
    { 
      name: 'schemaMarkup',
      title: 'Schema Markup',
      type: 'text',
      description: 'JSON-LD schema markup. Auto-generated but can be overridden.',
      components: {
        input: ({ value, parent }: { value: string; parent: any }) => {
          // Auto-generate schema if not manually set
          if (!value) {
            const schema = {
              '@context': 'https://schema.org',
              '@type': 'Book',
              name: parent?.title || '',
              description: parent?.blurb || '',
              isbn: `${parent?.baseMbin || ''}-P`,
              author: {
                '@type': 'Person',
                name: parent?.author?.name || ''
              },
              publisher: parent?.o_publishedBy || '',
              datePublished: parent?.o_publishedAt?.fullDate || 
                (parent?.o_publishedAt?.yearMonth ? 
                  `${parent.o_publishedAt.yearMonth.year}-${parent.o_publishedAt.yearMonth.month}` :
                  parent?.o_publishedAt?.yearOnly?.toString() || ''),
              genre: parent?.genre?.title || '',
              inLanguage: 'en',
              numberOfPages: parent?.pageCount || '',
              image: parent?.coverImage?.asset?.url || '',
              potentialAction: {
                '@type': 'ReadAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: `https://charliechanbooks.com/novels/${parent?.slug?.current || ''}`
                }
              }
            };
            return JSON.stringify(schema, null, 2);
          }
          return value;
        }
      },
      validation: (rule: Rule) => 
        rule.custom((value: string) => {
          if (!value) return true;
          try {
            JSON.parse(value);
            return true;
          } catch (e) {
            return 'Must be valid JSON';
          }
        })
    },
  ],
  preview: {
    select: {
      title: 'metaTitle',
      subtitle: 'metaDescription'
    },
    prepare({ title, subtitle }: { title?: string; subtitle?: string }) {
      return {
        title: title || '(No meta title set)',
        subtitle: subtitle ? (subtitle.length > 50 ? subtitle.substring(0, 50) + '...' : subtitle) : '(No meta description set)'
      }
    }
  }
};
