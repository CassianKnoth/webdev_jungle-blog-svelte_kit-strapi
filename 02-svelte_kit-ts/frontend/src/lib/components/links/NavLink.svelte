<script lang="ts">
  export let destination = "/";
  export let title: string;
  export let target = "_self";
  export let subline: string | undefined;

  const scrollIntoView = () => {
    const scrollTo = document.querySelector(destination);
    scrollTo.scrollIntoView();
  };
</script>

<a
  href={destination}
  {target}
  alt={`scroll to blog titled '${title}'`}
  on:click|preventDefault={scrollIntoView}
  ><span>{title}</span>
  {#if subline}
    <br />
    <span class="small">{subline}</span>
  {/if}
</a>

<style>
  a {
    text-decoration: none;
    color: var(--color-accent);
    position: relative;
  }

  a::after {
    position: absolute;
    content: "";
    top: 110%;
    left: 0;
    width: 0%;
    transition: width 0.2s ease;
    height: 1px;
    background-color: var(--color-accent);
  }

  /* links hover */

  a:hover::after {
    width: 100%;
  }

  .small {
    font-size: 0.8rem;
  }
</style>
