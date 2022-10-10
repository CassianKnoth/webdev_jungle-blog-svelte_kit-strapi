export const load = async () => {
	const res = await fetch('http://localhost:1337/api/posts?populate=*');
	const data = await res.json();
	return { data };
};