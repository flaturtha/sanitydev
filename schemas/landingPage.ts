import { Rule, PreviewValue } from '@sanity/types'

interface LandingPagePreview {
  title?: string
  slug?: string
}

export default {
  name: "landingPage",
  type: "document",
  title: "Landing Page",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Page Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "The URL path for this landing page",
      options: {
        source: "title",
      },
    },
    {
      name: "product",
      type: "reference",
      to: [{ type: "novel" }],
      title: "Related Product",
      description: "The product this landing page is for",
    },
    {
      name: "sections",
      type: "array",
      title: "Page Sections",
      description: "Add and arrange sections for the landing page",
      of: [
        { type: "headerSection" },
        { type: "heroSection" },
        { type: "quickPurchaseSection" },
        { type: "featureSection" },
        { type: "productFeaturesSection" },
        { type: "alternativeEditionsSection" },
        { type: "testimonialsSection" },
        { type: "faqSection" },
        { type: "ctaSection" },
      ],
    },
    {
      name: "seo",
      type: "seo",
      title: "SEO Settings",
    },
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug.current",
    },
    prepare({ title, slug }: LandingPagePreview): PreviewValue {
      return {
        title: title || "Untitled Landing Page",
        subtitle: slug ? `/${slug}` : "No slug set",
      }
    },
  },
} 