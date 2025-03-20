import { Rule, PreviewValue, PrepareViewOptions } from '@sanity/types'

interface TestimonialPreview {
  title: string
  subtitle: string
  rating: number
}

export default {
  name: "testimonialsSection",
  type: "object",
  title: "Testimonials Section",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Section Title",
      description: "The main heading for the testimonials section",
    },
    {
      name: "testimonials",
      type: "array",
      title: "Testimonials",
      description: "Add customer testimonials",
      of: [
        {
          type: "object",
          name: "testimonial",
          fields: [
            {
              name: "quote",
              type: "text",
              title: "Quote",
              description: "The testimonial text",
            },
            {
              name: "author",
              type: "string",
              title: "Author",
              description: "Who gave this testimonial",
            },
            {
              name: "rating",
              type: "number",
              title: "Rating",
              description: "Rating out of 5 stars",
              initialValue: 5,
            },
          ],
          preview: {
            select: {
              title: "author",
              subtitle: "quote",
              rating: "rating",
            },
            prepare({ title, subtitle, rating }: TestimonialPreview) {
              return {
                title: title || "Anonymous",
                subtitle: `${rating} stars - ${subtitle || "No quote"}`,
              }
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
      testimonials: "testimonials",
    },
    prepare(selection: Record<string, unknown>, viewOptions?: PrepareViewOptions): PreviewValue {
      const { title, testimonials } = selection
      return {
        title: (title as string) || "Testimonials Section",
        subtitle: `${(testimonials as any[] || []).length} testimonials`,
      }
    },
  },
} 