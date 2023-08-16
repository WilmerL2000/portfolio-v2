import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'workPoint',
    title: 'Work Points',
    type: 'document',
    fields: [
        defineField({
            title: 'Point',
            name: 'point',
            type: 'string',
        }),
    ],
})
