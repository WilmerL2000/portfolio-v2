import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: '3erdduzz',
    dataset: 'production',
    apiVersion: '2023-08-08',
    useCdn: false,
});
