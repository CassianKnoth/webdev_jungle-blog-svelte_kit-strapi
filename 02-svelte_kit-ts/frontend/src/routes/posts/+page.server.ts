import type { PageServerLoad } from './$types';

  interface Entries {
    id: number;
    attributes: {
      Slug: string | null;
      blogContent: {
        id: number;
        __component: string;
        content: string;
      }[];
      createdAt: string;
      updatedAt: string | null;
      title: string;
      subline: string | null;
    };
  }

export const load: PageServerLoad = ({ fetch }) => {
    const fetchPosts = async () => {
        const res = await fetch('/api/posts');
          const entries = await res.json();
          console.log("fetch: ", await entries);
          return entries.data as Entries[];
    }
  return { entries: fetchPosts()  };
};
