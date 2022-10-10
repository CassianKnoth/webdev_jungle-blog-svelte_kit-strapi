<script>
	import { set_attributes } from "svelte/internal";

    export let data;
    console.log(data)
    const posts = data.data.data;
    console.log(posts)
</script>

<h1>Fetching Data</h1>

{#each posts as post}
<h2>{post.attributes.title}</h2>
<p>{post.attributes.description}</p>
{/each}
