<script lang="ts">
  import Code from "$lib/components/blog/Code.svelte";
  import type { PageServerData } from "./$types";
  export let data: PageServerData;
  console.log("data: ", data.entry);
</script>

<h1>{data.entry.attributes.title}</h1>

<hr />

{#if data.entry.attributes.subline}
  <h2>{data.entry.attributes.subline}</h2>
{/if}

{#each data.entry.attributes.blogContent as paragraph}
  {#if paragraph.__component === "blog-content.blog-text"}
    <p>
      {paragraph.content}
    </p>
  {:else}
    <Code content={paragraph.content} />
  {/if}
{/each}

<style>
  h1 {
    font-size: 3rem;
  }

  hr {
    border-top: 1px solid var(--color-dark);
  }

  * {
    margin-bottom: 1rem;
  }
</style>
