import { Rule, PreviewValue, PrepareViewOptions } from '@sanity/types'

interface PreviewProps {
  title?: string
  editions?: Array<any>
}

interface EditionPreview {
  title?: string
  price?: number
  status?: string
}

export default {
  name: "alternativeEditionsSection",
  type: "object",
  title: "Alternative Editions Section",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Section Title",
      description: "The main heading for the editions section",
    },
    {
      name: "editions",
      type: "array",
      title: "Product Editions",
      description: "Add different editions or formats of the product",
      of: [
        {
          type: "object",
          name: "edition",
          fields: [
            {
              name: "icon",
              type: "string",
              title: "Icon",
              description: "Icon to represent this edition (e.g., 'book', 'headphones', 'tablet')",
            },
            {
              name: "title",
              type: "string",
              title: "Edition Title",
              description: "Name of this edition (e.g., 'Hardcover', 'Audiobook')",
            },
            {
              name: "description",
              type: "text",
              title: "Description",
              description: "Brief description of this edition",
            },
            {
              name: "price",
              type: "number",
              title: "Price",
              description: "Price in USD",
            },
            {
              name: "status",
              type: "string",
              title: "Status",
              options: {
                list: [
                  { title: "Available Now", value: "available" },
                  { title: "Coming Soon", value: "coming-soon" },
                  { title: "Pre-order", value: "pre-order" },
                  { title: "Sold Out", value: "sold-out" },
                ],
              },
              initialValue: "available",
            },
            {
              name: "button",
              type: "object",
              title: "Button Settings",
              fields: [
                {
                  name: "text",
                  type: "string",
                  title: "Button Text",
                  description: "Text to display on the button",
                },
                {
                  name: "link",
                  type: "url",
                  title: "Button Link",
                  description: "Where the button should link to",
                },
              ],
            },
          ],
          preview: {
            select: {
              title: "title",
              price: "price",
              status: "status",
            },
            prepare({ title, price, status }: EditionPreview): PreviewValue {
              return {
                title: title || "Untitled Edition",
                subtitle: `$${price || '0'} - ${status || 'No status'}`,
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
      editions: "editions",
    },
    prepare(selection: Record<string, unknown>, viewOptions?: PrepareViewOptions): PreviewValue {
      const { title, editions } = selection
      return {
        title: (title as string) || "Alternative Editions Section",
        subtitle: `${(editions as any[] || []).length} editions`,
      }
    },
  },
} 