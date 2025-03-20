import { Rule, PreviewValue, PrepareViewOptions } from '@sanity/types'

interface PreviewProps {
  title?: string
  features?: Array<any>
}

export default {
  name: "productFeaturesSection",
  type: "object",
  title: "Product Features Section",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Section Title",
      description: "The main title for the features section",
    },
    {
      name: "features",
      type: "array",
      title: "Features",
      description: "Add up to 3 product features",
      of: [
        {
          type: "object",
          name: "feature",
          fields: [
            {
              name: "icon",
              type: "image",
              title: "Feature Icon",
              options: {
                hotspot: true,
              },
            },
            {
              name: "title",
              type: "string",
              title: "Feature Title",
              description: "The bold text for this feature",
            },
            {
              name: "description",
              type: "text",
              title: "Feature Description",
              description: "A brief description of this feature",
            },
          ],
          preview: {
            select: {
              title: "title",
              media: "icon",
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
          description: "The background color for this section",
          options: {
            list: [
              { title: "Vintage Dark", value: "bg-vintage-dark" },
              { title: "Parchment", value: "bg-parchment" },
            ],
          },
          initialValue: "bg-vintage-dark",
        },
        {
          name: "textColor",
          type: "string",
          title: "Text Color",
          description: "The text color for this section",
          options: {
            list: [
              { title: "Vintage Cream", value: "text-vintage-cream" },
              { title: "Vintage Dark", value: "text-vintage-dark" },
            ],
          },
          initialValue: "text-vintage-cream",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      features: "features",
    },
    prepare(selection: Record<string, unknown>, viewOptions?: PrepareViewOptions): PreviewValue {
      const { title, features } = selection
      return {
        title: (title as string) || "Product Features",
        subtitle: `${(features as any[] || []).length} features`,
      }
    },
  },
} 