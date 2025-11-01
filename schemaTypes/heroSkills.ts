import {defineField, defineType} from 'sanity'

export const heroSkills = defineType({
  name: 'heroSkills',
  title: 'Hero Skills',
  type: 'document',
  fields: [
    defineField({
      name: 'heroSkillUrl',
      title: 'Hero Skill Url',
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
