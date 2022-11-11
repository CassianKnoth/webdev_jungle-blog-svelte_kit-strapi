<script>
  import Code from "./Code.svelte";

  export let idForScrolling = "";
  export let headline = "";
  export let timestamp = {
    creation: "2022",
    edit: "2022",
  };
  export let paragraphs = [];

  const getTimeStamp = (date) => {
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

<article id={`post-${idForScrolling}`} class="blogEntry">
  <h1>{headline}</h1>
  <hr />
  <p class="blogDate monospace">
    <time
      class="blogDateCreation"
      datetime={getTimeStamp(timestamp.creation).attribute}
      >{getTimeStamp(timestamp.creation).visible}</time
    >
    {#if timestamp.creation !== timestamp.edit}
      <br />
      <span>last edit:</span>
      <time class="blogDateEdit" datetime={getTimeStamp(timestamp.edit).visible}
        >{getTimeStamp(timestamp.edit).visible}</time
      >
    {/if}
  </p>

  {#each paragraphs as paragraph}
    {#if paragraph.__component === "blog-content.blog-text"}
      <p>
        {paragraph.content}
      </p>
    {:else}
      <Code content={paragraph.content} />
    {/if}
  {/each}
</article>

<style>
  .blogEntry {
    background-color: var(--color-neutral);
    border-radius: 0.5rem;
    padding: 2rem;
    box-shadow: 0 0.2rem 2rem rgba(0, 0, 0, 0.1);
    align-self: start;
  }

  .blogEntry:not(:last-child) {
    margin-bottom: 2rem;
  }

  .blogEntry > :global(*):not(:last-child) {
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2rem;
  }

  @media only screen and (min-width: 850px) {
    h1 {
      font-size: 3rem;
    }
  }

  p {
    line-height: 200%;
  }

  .blogDate {
    font-size: 0.8rem;
    color: var(--color-shy);
  }
</style>
