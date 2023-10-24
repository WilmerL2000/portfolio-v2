import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'testUser',
    title: 'Test user',
    type: 'document',
    fields: [
        defineField({
            title: 'User',
            name: 'user',
            type: 'string',
        }),
        defineField({
            title: 'Password',
            name: 'password',
            type: 'string',
        }),
    ],
})
