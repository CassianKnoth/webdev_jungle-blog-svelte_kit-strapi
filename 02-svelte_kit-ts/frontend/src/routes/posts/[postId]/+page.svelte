<script lang="ts">
  import Code from "$lib/components/blog/Code.svelte";
  import type { PageServerData } from "./$types";
  export let data: PageServerData;
  console.log("data: ", data.entry);

  const getTimeStamp = (date: string) => {
    let datefromString = new Date(date);
    return {
      visible: `${datefromString.toLocaleDateString([], {
        year: "numeric",
        month: "long",
        day: "2-digit",
      })} | ${datefromString.toLocaleTimeString([], {
        hour: "numeric",
        minute: "numeric",
      })}`,
      attribute: datefromString.toISOString(),
    };
  };
</script>

<h1>{data.entry.attributes.title}</h1>

<hr />

<p class="blogDate monospace">
  <time
    class="blogDateCreation"
    datetime={getTimeStamp(data.entry.attributes.createdAt).attribute}
    >{getTimeStamp(data.entry.attributes.createdAt).visible}</time
  >
  {#if data.entry.attributes.createdAt !== data.entry.attributes.updatedAt}
    <br />
    <span>last edit:</span>
    <time
      class="blogDateEdit"
      datetime={getTimeStamp(data.entry.attributes.updatedAt).visible}
      >{getTimeStamp(data.entry.attributes.updatedAt).visible}</time
    >
  {/if}
</p>

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

  p {
    line-height: 200%;
  }

  .blogDate {
    font-size: 0.8rem;
    color: var(--color-shy);
  }

  * {
    margin-bottom: 1rem;
  }
</style>
