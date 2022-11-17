import type { PageServerLoad } from './$types';
import type { Entry } from '$lib/types'

export const load: PageServerLoad = async ({ fetch, params }) => {
  const res = await fetch(
    `${import.meta.env.VITE_CMS_URL}/api/posts/${params.postId}?populate=*`
    );
    const entry = await res.json();
  return { entry: entry.data as Entry };
};

// via API:

// import type { PageServerLoad } from './$types';
// import type { Entry } from '$lib/types'

// export const load: PageServerLoad = async ({ fetch, params }) => {
//   const res = await fetch(
//     `/api/posts/${params.postId}`
//     );
//     const entry = await res.json();
//   return { entry: entry.data as Entry };
// };
