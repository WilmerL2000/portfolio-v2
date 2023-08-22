import { experience } from "@/lib/queries";
import { client } from "@/lib/sanityClient";

export const getExperience = async () => {
    const data = await client.fetch(experience())

    return data
}