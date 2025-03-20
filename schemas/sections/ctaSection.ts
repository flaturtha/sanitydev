import { Rule, PreviewValue, PrepareViewOptions } from '@sanity/types'

interface PreviewProps {
  title?: string
  buttonText?: string
}

export default {
  name: "ctaSection",
  type: "object",
  title: "Call to Action Section",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Section Title",
      description: "The main heading for the CTA section",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "Supporting text to encourage action",
    },
    {
      name: "guaranteeText",
      type: "text",
      title: "Guarantee Text",
      description: "Optional guarantee or risk-free message",
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
        {
          name: "subtext",
          type: "string",
          title: "Button Subtext",
          description: "Optional text to display below the button (e.g., 'Limited time offer')",
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
          initialValue: "bg-vintage-dark",
        },
        {
          name: "textColor",
          type: "string",
          title: "Text Color",
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
      buttonText: "button.text",
    },
    prepare(selection: Record<string, unknown>, viewOptions?: PrepareViewOptions): PreviewValue {
      const { title, buttonText } = selection
      return {
        title: "CTA Section",
        subtitle: `${title || 'Untitled'} - ${buttonText || 'No button text'}`,
      }
    },
  },
} 