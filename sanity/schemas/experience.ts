import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'experience',
    title: 'Experience ',
    type: 'document',
    fields: [
        defineField({
            title: 'Job Title',
            name: 'jobTitle',
            type: 'string',
        }),
        defineField({
            title: 'Company',
            name: 'company',
            type: 'string',
        }),
        defineField({
            title: 'Date Started',
            name: 'dateStarted',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM',
            }
        }),
        defineField({
            title: 'Date Ended',
            name: 'dateEnded',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM',
            }
        }),
        defineField({
            title: "Summary",
            name: "summary",
            type: "text",
        }),
        defineField({
            title: 'Work Points',
            name: 'workPoints',
            type: 'array',
            of: [{ type: 'workPoint' }],
        }),
        defineField({
            title: 'Technologies',
            name: 'technologies',
            type: 'array',
            of: [{ type: "reference", to: { type: "technology" } }],
        }),
        defineField({
            title: 'Currently Working Here',
            name: 'currentlyWorkingHere',
            type: 'boolean'
        }),
    ],
})
