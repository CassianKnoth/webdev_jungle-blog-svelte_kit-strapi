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

export const load: PageServerLoad = async ({ fetch }) => {
  const res = await fetch(
    `${import.meta.env.VITE_CMS_URL}/api/posts?populate=*`
  );
  const entries = await res.json();
  return { entries: entries.data as Entries[] };
};
