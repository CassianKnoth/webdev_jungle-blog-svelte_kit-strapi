export const load = async () => {
  const res = await fetch("http://localhost:1337/api/posts?populate=*");
  const entries = await res.json();
  return { entries: entries.data };
};
