export const load = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_CMS_URL}/api/posts?populate=*`
  );
  const entries = await res.json();
  return { entries: entries.data };
};
