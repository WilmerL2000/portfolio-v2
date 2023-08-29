import { experience } from "@/lib/queries";
import { client } from "@/lib/sanityClient";

export const getExperiences = async (): Promise<WorkExperience[]> => {
    const data = await client.fetch(experience())

    return data
}