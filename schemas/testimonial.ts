export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role/Title',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Testimonial',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
