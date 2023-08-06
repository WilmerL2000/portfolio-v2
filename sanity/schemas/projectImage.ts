import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'imageUrl',
    title: 'Project Image URL',
    type: 'document',
    fields: [
        defineField({
            name: 'url',
            title: 'URL',
            type: 'url',
        }),
    ],
})
