<script>
  import Entry from "../lib/components/blog/Entry.svelte";
  import Nav from "../lib/components/blog/Nav.svelte";

  export let data;
  console.log(data);
  const posts = data.entries;
  console.log(posts);
</script>

<div class="blogWrapper">
  <Nav />
  {#each posts as post}
    <Entry
      headline={post.attributes.title}
      timestamp={{
        creation: post.attributes.createdAt,
        edit: post.attributes.updatedAt,
      }}
      paragraphs={post.attributes.blogContent}
    />
  {/each}
</div>

<style>
  .blogWrapper {
    display: grid;
    grid-template-columns: 100%;
    column-gap: var(--gap);
    row-gap: 2rem;
    padding: var(--gap);
    background-color: var(--color-pastel);
    min-height: 100vh;
  }

  @media only screen and (min-width: 850px) {
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
