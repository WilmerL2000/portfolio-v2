import { projects } from "@/lib/queries";
import { client } from "@/lib/sanityClient";

export const getProjects = async (): Promise<HomeProject[]> => {
    const data = await client.fetch(projects())

    return data
}