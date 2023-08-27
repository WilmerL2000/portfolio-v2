import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'hobby',
    title: 'Hobby',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'hobby',
            title: 'Hobby',
            type: 'text',
        }),
    ],
})
