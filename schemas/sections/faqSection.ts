import { Rule, PreviewValue, PrepareViewOptions } from '@sanity/types'

interface PreviewProps {
  title?: string
  questions?: Array<any>
}

export default {
  name: "faqSection",
  type: "object",
  title: "FAQ Section",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Section Title",
      description: "The main title for the FAQ section",
    },
    {
      name: "questions",
      type: "array",
      title: "FAQ Items",
      description: "Add frequently asked questions and answers",
      of: [
        {
          type: "object",
          name: "faqItem",
          fields: [
            {
              name: "question",
              type: "string",
              title: "Question",
            },
            {
              name: "answer",
              type: "text",
              title: "Answer",
            },
            {
              name: "isExpanded",
              type: "boolean",
              title: "Expanded by Default",
              description: "Whether this FAQ item should be expanded when the page loads",
              initialValue: false,
            },
          ],
          preview: {
            select: {
              title: "question",
              subtitle: "answer",
            },
          },
        },
      ],
    },
    {
      name: "style",
      type: "object",
      title: "Style Settings",
      fields: [
        {
          name: "backgroundColor",
          type: "string",
          title: "Background Color",
          options: {
            list: [
              { title: "Parchment", value: "bg-parchment" },
              { title: "Vintage Dark", value: "bg-vintage-dark" },
            ],
          },
          initialValue: "bg-parchment",
        },
        {
          name: "textColor",
          type: "string",
          title: "Text Color",
          options: {
            list: [
              { title: "Vintage Dark", value: "text-vintage-dark" },
              { title: "Vintage Cream", value: "text-vintage-cream" },
            ],
          },
          initialValue: "text-vintage-dark",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      questions: "questions",
    },
    prepare(selection: Record<string, unknown>, viewOptions?: PrepareViewOptions): PreviewValue {
      const { title, questions } = selection
      return {
        title: (title as string) || "FAQ Section",
        subtitle: `${(questions as any[] || []).length} questions`,
      }
    },
  },
} 