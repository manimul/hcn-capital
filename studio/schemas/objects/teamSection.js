export default {
  type: 'object',
  name: 'teamSection',
  title: 'Team Section',
  fields: [
    {
      name: 'label',
      type: 'string',
      title: 'Label'
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'text',
      type: 'portableText',
      title: 'Text'
    },
    {
      name: 'image',
      type: 'figure',
      title: 'Image'
    },

    {
      name: 'Linkedin',
      type: 'url',
      title: 'Linkedin'
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'Call to action'
    }
  ],
  preview: {
    select: {
      heading: 'heading'
    }
  }
}
