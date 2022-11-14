<script lang="ts">
  import NavLink from "$lib/components/links/NavLink.svelte";

  type PostTitles = {
    title: string;
    subline: string;
    id: number;
  };
  export let postTitles: PostTitles[];
  console.log("post titles: ", postTitles);
</script>

<input
  type="checkbox"
  name="blogNavToggle"
  id="blogNavToggle"
  class="blogNavToggle"
/>
<label for="blogNavToggle" class="blogNavToggleLabel" />
<nav>
  <h1>Table of contents</h1>
  <hr />
  <ol>
    {#each postTitles as postLink}
      <li>
        <NavLink
          destination={`#post-${postLink.id}`}
          title={postLink.title}
          subline={postLink.subline}
        />
      </li>
    {/each}
  </ol>
</nav>

<style>
  Nav {
    background-color: var(--color-neutral);
    border-radius: 0.5rem;
    padding: 2rem;
    box-shadow: 0 0.2rem 2rem rgb(0 0 0 / 10%);
    position: fixed;
    width: calc(100vw - var(--gap) * 2);
    border: 2px solid var(--color-accent);
    right: -100%;
    max-height: calc(100vh - 10rem);
    overflow: scroll;
    transition: right 0.2s ease;
    z-index: 1;
  }

  hr {
    border-top: 1px solid var(--color-dark);
  }

  ol {
    list-style-position: outside;
    padding-left: 3rem;
    color: var(--color-accent);
  }

  h1,
  hr,
  li {
    margin-bottom: 1rem;
  }

  input.blogNavToggle {
    display: none;
  }

  .blogNavToggleLabel {
    width: 50px;
    height: 50px;
    border-radius: 50% 0 0 50%;
    background-color: var(--color-accent);
    color: var(--color-neutral);
    box-shadow: 0 0.2rem 2rem rgba(0, 0, 0, 0.2);
    position: fixed;
    right: -5px;
    top: 27%;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 0;
    cursor: pointer;
    z-index: 2;
  }

  .blogNavToggleLabel::after {
    content: "\00276E";
  }

  /* hover blogNav label */

  .blogNavToggle:not(:checked) ~ .blogNavToggleLabel:hover {
    box-shadow: 1rem 0 0 var(--color-accent), 0 0.2rem 2rem rgba(0, 0, 0, 0.2);
    right: -1px;
  }

  /* toggle Nav */

  /* bring Nav into view */
  .blogNavToggle:checked ~ Nav {
    right: var(--gap);
  }

  /* appearance of label */
  .blogNavToggle:checked ~ .blogNavToggleLabel {
    right: calc(var(--gap) - 25px);
    border-radius: 50%;
    background-color: var(--color-dark);
  }

  /* appearance of label */
  .blogNavToggleLabel::after {
    transition: transform 0.5s ease;
  }

  /* appearance of label */
  .blogNavToggle:checked ~ .blogNavToggleLabel::after {
    transform: rotate(-180deg);
  }

  /* visible Nav, no toggle */
  @media only screen and (min-width: 1000px) {
    Nav {
      position: sticky;
      top: 5rem;
      width: auto;
      align-self: start;
    }

    .blogNavToggleLabel {
      display: none;
    }
  }
</style>
