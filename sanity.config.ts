import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'

import article from './schemas/article'
import author from './schemas/author'
import genre from './schemas/genre'
import product from './schemas/product'
import language from './schemas/language'
import blockContent from './schemas/blockContent'
import seo from './schemas/seo'
import variant from './schemas/variant'
import editions from './schemas/editions'
import category from './schemas/category'
import collection from './schemas/collection'
import testimonial from './schemas/testimonial'
import review from './schemas/review'
import series from './schemas/series'

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
      product,
      language,
      blockContent,
      seo,
      variant,
      editions,
      category,
      collection,
      testimonial,
      review,
      series,
    ],
  },
})

