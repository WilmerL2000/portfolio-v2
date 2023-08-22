import { projects } from "@/lib/queries";
import { client } from "@/lib/sanityClient";

export const getProjects = async (): Promise<HomeProjects[]> => {
    const data = await client.fetch(projects())

    return data
}