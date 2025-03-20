export default {
  name: "featureSection",
  type: "object",
  title: "Feature Section",
  fields: [
    {
      name: "sectionTitle",
      type: "string",
      title: "Section Title",
      description: "The main title for this feature section",
    },
    {
      name: "features",
      type: "array",
      title: "Features",
      description: "Add alternating feature blocks",
      of: [
        {
          type: "object",
          name: "feature",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Feature Title",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "content",
              type: "array",
              title: "Feature Content",
              description: "Add paragraphs of content",
              of: [{ type: "text" }],
              validation: (Rule) => Rule.required(),
            },
            {
              name: "image",
              type: "image",
              title: "Feature Image",
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Alt Text",
                  description: "Alternative text for accessibility",
                },
              ],
            },
            {
              name: "imagePosition",
              type: "string",
              title: "Image Position",
              options: {
                list: [
                  { title: "Left", value: "left" },
                  { title: "Right", value: "right" },
                ],
              },
              initialValue: "right",
            },
            {
              name: "bulletPoints",
              type: "array",
              title: "Bullet Points",
              description: "Optional bullet points to display",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "text",
                      type: "string",
                      title: "Text",
                    },
                    {
                      name: "strong",
                      type: "string",
                      title: "Strong Text",
                      description: "Text to be displayed in bold (optional)",
                    },
                  ],
                },
              ],
            },
          ],
          preview: {
            select: {
              title: "title",
              media: "image",
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "sectionTitle",
      features: "features",
    },
    prepare({ title, features }) {
      return {
        title: title || "Feature Section",
        subtitle: `${features?.length || 0} features`,
      }
    },
  },
} 