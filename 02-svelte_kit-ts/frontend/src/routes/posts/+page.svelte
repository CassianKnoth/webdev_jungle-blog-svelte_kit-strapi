<script lang="ts">
  import type { PageServerData } from "./$types";

  export let data: PageServerData;
</script>

{#each data.entries as post}
  <h1>{post.attributes.title}</h1>
  {#if post.attributes.subline}
    <h2>{post.attributes.subline}</h2>
  {/if}
{/each}

<style>
</style>
