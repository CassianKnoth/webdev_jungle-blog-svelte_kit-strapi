<script lang="ts">
  export let destination: number;
  export let title: string;
  export let subline: string | null;
</script>

<li class="entryTeaser">
  <a href="/posts/{destination}">
    <h1>{title}</h1>
    {#if subline}
      <hr />
      <h2>{subline}</h2>
    {/if}
  </a>
</li>

<style>
  .entryTeaser {
    border-radius: 1rem;
    background-color: var(--color-neutral);
    box-shadow: 0 0.2rem 2rem rgba(0, 0, 0, 0.1);
    flex-basis: 30%;
    position: relative;
    transition: transform 0.1s ease-out;
  }

  .entryTeaser:hover {
    transform: translateY(-0.2rem);
    outline: 2px solid var(--color-accent);
  }

  .entryTeaser a {
    display: block;
    padding: 2rem;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: var(--color-dark);
  }

  .entryTeaser a > * {
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1rem;
    font-weight: 500;
  }

  hr {
    border-color: var(--color-dark);
  }
</style>
