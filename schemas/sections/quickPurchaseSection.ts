export default {
  name: "quickPurchaseSection",
  type: "object",
  title: "Quick Purchase Section",
  fields: [
    {
      name: "pricing",
      type: "object",
      title: "Pricing",
      fields: [
        {
          name: "originalPrice",
          type: "number",
          title: "Original Price",
          description: "The original price (e.g., 97.00)",
          validation: (Rule) => Rule.required().positive(),
        },
        {
          name: "currentPrice",
          type: "number",
          title: "Current Price",
          description: "The current/discounted price (e.g., 47.00)",
          validation: (Rule) => Rule.required().positive(),
        },
      ],
    },
    {
      name: "reviews",
      type: "object",
      title: "Reviews Summary",
      fields: [
        {
          name: "rating",
          type: "number",
          title: "Star Rating",
          description: "Rating out of 5 stars",
          validation: (Rule) => Rule.required().min(0).max(5),
        },
        {
          name: "count",
          type: "number",
          title: "Number of Reviews",
          validation: (Rule) => Rule.required().integer().positive(),
        },
      ],
    },
    {
      name: "ctaButton",
      type: "object",
      title: "Call to Action Button",
      fields: [
        {
          name: "text",
          type: "string",
          title: "Button Text",
          description: "Text to display on the button",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "link",
          type: "url",
          title: "Button Link",
          description: "Where the button should link to",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "productImage",
      type: "image",
      title: "Product Image",
      description: "The main product image to display",
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
      name: "badge",
      type: "object",
      title: "Product Badge",
      fields: [
        {
          name: "text",
          type: "string",
          title: "Badge Text",
          description: "Text to display in the badge (e.g., 'Limited Edition')",
        },
        {
          name: "show",
          type: "boolean",
          title: "Show Badge",
          initialValue: true,
        },
      ],
    },
    {
      name: "paymentMethods",
      type: "array",
      title: "Payment Methods",
      description: "Payment method icons to display",
      of: [
        {
          type: "object",
          name: "paymentMethod",
          fields: [
            {
              name: "name",
              type: "string",
              title: "Name",
              options: {
                list: [
                  { title: "Visa", value: "visa" },
                  { title: "Mastercard", value: "mastercard" },
                  { title: "American Express", value: "amex" },
                ],
              },
            },
            {
              name: "icon",
              type: "image",
              title: "Icon",
            },
          ],
          preview: {
            select: {
              title: "name",
              media: "icon",
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      price: "pricing.currentPrice",
      rating: "reviews.rating",
    },
    prepare({ price, rating }) {
      return {
        title: "Quick Purchase Section",
        subtitle: `$${price} - ${rating} stars`,
      }
    },
  },
} 