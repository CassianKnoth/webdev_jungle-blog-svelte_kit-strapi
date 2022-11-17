import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ( { fetch }) => {
    const res = await fetch(
        `${import.meta.env.VITE_CMS_URL}/api/posts?populate=*`
        );
    const data = await res.json();
    return new Response(JSON.stringify(data));
}