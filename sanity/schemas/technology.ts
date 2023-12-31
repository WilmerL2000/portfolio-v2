import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'technology',
    title: 'Technology',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'url',
            title: 'URL',
            type: 'url',
        }),
    ],
})
