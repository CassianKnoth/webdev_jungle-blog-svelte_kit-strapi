<script lang="ts">
  import Entry from "../lib/components/blog/Entry.svelte";
  import Nav from "../lib/components/blog/Nav.svelte";

  import type { PageServerData } from "./$types";

  export let data: PageServerData;
  console.log("data raw: ", data);
  console.log("data data.entries: ", data.entries);
</script>

<div class="blogWrapper">
  <Nav
    postTitles={data.entries.map((post) => {
      return {
        title: post.attributes.title,
        subline: post.attributes.subline,
        id: post.id,
      };
    })}
  />
  <section class="blogEntries">
    {#each data.entries as post}
      <Entry
        idForScrolling={post.id}
        headline={post.attributes.title}
        timestamp={{
          creation: post.attributes.createdAt,
          edit: post.attributes.updatedAt,
        }}
        paragraphs={post.attributes.blogContent}
      />
    {/each}
  </section>
</div>

<style>
  .blogWrapper {
    display: grid;
    grid-template-columns: 100%;
    column-gap: var(--gap);
    row-gap: 2rem;
    min-height: 100vh;
  }

  @media only screen and (min-width: 1000px) {
    .blogWrapper {
      grid-template-columns: 2fr minmax(0, 5fr);
    }
  }

  @media only screen and (min-width: 1400px) {
    .blogWrapper {
      padding-left: calc(var(--gap) * 3);
      padding-right: calc(var(--gap) * 3);
    }
  }
</style>
