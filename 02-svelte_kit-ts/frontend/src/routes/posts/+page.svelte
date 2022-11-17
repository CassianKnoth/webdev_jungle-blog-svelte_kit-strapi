<script lang="ts">
  import EntryTeaser from "$lib/components/blog/EntryTeaser.svelte";
  import type { PageServerData } from "./$types";

  export let data: PageServerData;
</script>

<div class="wrapper">
  <div class="headline">
    <div class="line" />
    <h1>Blog Posts:</h1>
    <div class="line" />
  </div>

  <ul class="entryTeaserWrapper">
    {#each data.entries as post}
      <EntryTeaser
        destination={post.id}
        title={post.attributes.title}
        subline={post.attributes.subline}
      />
    {/each}
  </ul>
</div>

<style>
  .wrapper {
    max-width: 100%;
    margin: 0 auto;
  }

  .headline {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-bottom: var(--gap);
  }

  .headline h1 {
    font-size: 3rem;
    flex-basis: 20rem;
    text-align: center;
  }

  .headline .line {
    height: 2px;
    background-color: var(--color-dark);
    flex-basis: 20%;
  }

  .entryTeaserWrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  ul {
    list-style: none;
  }

  @media only screen and (min-width: 800px) {
    .wrapper {
      max-width: 80%;
    }

    .headline h1 {
      font-size: 3rem;
      flex-basis: fit-content;
    }

    .entryTeaserWrapper {
      flex-direction: row;
    }
  }
</style>
