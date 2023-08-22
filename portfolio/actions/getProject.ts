import { project } from "@/lib/queries";
import { client } from "@/lib/sanityClient";

export const getProject = async (slug: string): Promise<Project> => {
    const data = await client.fetch(project(slug))

    return data
}