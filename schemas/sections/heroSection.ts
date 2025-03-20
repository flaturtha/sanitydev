export default {
  name: "heroSection",
  type: "object",
  title: "Hero Section",
  fields: [
    {
      name: "headline",
      type: "string",
      title: "Headline",
      description: "The main headline (e.g., 'VINTAGE TRUE CRIME: The Lost Cases of Allan Pinkerton')",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subheadline",
      type: "string",
      title: "Subheadline",
      description: "The supporting text below the headline",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "headline",
      subtitle: "subheadline",
    },
  },
} 