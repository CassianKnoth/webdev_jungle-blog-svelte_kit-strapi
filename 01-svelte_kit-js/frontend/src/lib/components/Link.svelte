<script lang="ts">
  export let destination = "/";
  export let title = "";
  export let alt = "link";
  export let target = "_self";
</script>

<a href={destination} {target} {alt}
  >{title} <span class="guide">&#10095;</span></a
>

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

  a span.guide {
    display: inline-blocK;
    transition: transform 0.2s ease;
  }

  a:hover span.guide {
    transform: translateX(0.3rem);
  }

  a:hover::after {
    width: 100%;
  }
</style>
