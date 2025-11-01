import {defineField, defineType} from 'sanity'

export const heroImage = defineType({
  name: 'heroImage',
  title: 'Hero Image',
  type: 'document',
  fields: [
    defineField({
      name: 'heroImgUrl',
      title: 'Hero Img Url',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'attribution',
      title: 'Alt Text',
      type: 'string',
    }),
  ],
})
