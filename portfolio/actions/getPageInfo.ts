import { pageInfo } from "@/lib/queries";
import { client } from "@/lib/sanityClient";

export const getPageInfo = async () => {
    const data = await client.fetch(pageInfo())

    return data
}