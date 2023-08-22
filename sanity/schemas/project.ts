import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'project',
    title: 'Project ',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'projectImage',
            title: 'Project Image URL',
            type: 'url',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: "summary",
            title: "Summary",
            type: "text",
        }),
        defineField({
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [{ type: "reference", to: { type: "technology" } }],
        }),
        defineField({
            name: 'projectImages',
            title: 'Project Images',
            type: 'array',
            of: [{ type: 'imageUrl' }],
        }),
        defineField({
            name: "webLink",
            title: "Link To Web",
            type: "url",
        }),
        defineField({
            name: "repositoryLink",
            title: "Link To Git",
            type: "url",
        }),
    ],
})
