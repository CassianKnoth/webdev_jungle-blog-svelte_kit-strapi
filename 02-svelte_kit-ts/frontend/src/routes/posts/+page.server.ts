import type { PageServerLoad } from './$types';
import type { Entry } from '$lib/types'

export const load: PageServerLoad = ({ fetch }) => {
    const fetchPosts = async () => {
        const res = await fetch(`${import.meta.env.VITE_CMS_URL}/api/posts?populate=*`);
          const entries = await res.json();
          return entries.data as Entry[];
    }
  return { entries: fetchPosts() };
};


// via API:

// import type { PageServerLoad } from './$types';
// import type { Entry } from '$lib/types'

// export const load: PageServerLoad = ({ fetch }) => {
//     const fetchPosts = async () => {
//         const res = await fetch('/api/posts');
//           const entries = await res.json();
//           return entries.data as Entry[];
//     }
//   return { entries: fetchPosts() };
// };
