<script lang="ts">
  import Button from "./buttons/Button.svelte";

  export let content: string;

  const copyCode = () => {
    navigator.clipboard.writeText(content);
  };
</script>

<div class="code">
  <pre><code>{content}</code></pre>
  <Button label="copy" on:handleClick={copyCode} />
</div>

<style>
  .code {
    padding: 2rem;
    background-color: var(--color-dark);
    border-radius: 0.5rem;
    color: var(--color-neutral);
    line-height: 200%;
    position: relative;
  }

  .code pre {
    overflow-x: scroll;
  }

  .code > :global(.button) {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 0.75rem;
    padding: 0.5rem;
    font-weight: normal;
    opacity: 0.5;
  }

  .code > :global(.button):hover,
  .code > :global(.button):focus {
    background-color: var(--color-accent);
    opacity: 1;
  }
</style>
