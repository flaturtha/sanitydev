import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'

import article from './schemas/article'
import author from './schemas/author'
import genre from './schemas/genre'
import novel from './schemas/novel'
import language from './schemas/language'
import blockContent from './schemas/blockContent'
import seo from './schemas/seo'
import editions from './schemas/editions'
import collection from './schemas/collection'
import series from './schemas/series'
import landingPage from './schemas/landingPage'
import {
  headerSection,
  heroSection,
  quickPurchaseSection,
  featureSection,
  productFeaturesSection,
  alternativeEditionsSection,
  testimonialsSection,
  faqSection,
  ctaSection,
} from './schemas/sections'

export default defineConfig({
  name: 'default',
  title: 'Charlie Chan',

  projectId: 'joet3wd5',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: [
      article,
      author,
      genre,
      novel,
      language,
      blockContent,
      seo,
      editions,
      collection,
      series,
      landingPage,
      headerSection,
      heroSection,
      quickPurchaseSection,
      featureSection,
      productFeaturesSection,
      alternativeEditionsSection,
      testimonialsSection,
      faqSection,
      ctaSection,
    ],
  },
})

