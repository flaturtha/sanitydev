export default {
  name: 'review',
  title: 'Review',
  type: 'object',
  fields: [
    {
      name: 'reviewerName',
      title: 'Reviewer Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(1).max(5), // Rating from 1 to 5 stars
    },
    {
      name: 'reviewText',
      title: 'Review Text',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'starRating',
      title: 'Star Rating',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(1).max(5), // Star Rating from 1 to 5 stars
    },
  ],
}
