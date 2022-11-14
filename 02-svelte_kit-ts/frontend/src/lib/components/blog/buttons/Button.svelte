<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let label = "give me a name!";
  export let invert = false;
  export let disabled = false;
  const handleClick = (event: MouseEvent) => {
    dispatch("handleClick");
    // blur() to reset :focus from CSS
    (event.target as HTMLElement).blur();
  };
</script>

<button
  type="button"
  class={`button${invert ? " buttonInvert" : ""}`}
  {disabled}
  on:click={handleClick}>{label}</button
>

<style>
  .button {
    border: none;
    background-color: var(--color-accent);
    box-shadow: 0 0.2rem 2rem rgba(0, 0, 0, 0.2);
    font-family: inherit;
    font-size: 1rem;
    font-weight: bold;
    color: var(--color-neutral);
    padding: 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  .button:hover:not([disabled]),
  .button:focus:not([disabled]),
  .button[type="submit"]:hover:not([disabled]),
  .button[type="submit"]:focus:not([disabled]) {
    background-color: var(--color-dark);
    transform: translateY(-5px);
  }

  .button:focus:not([disabled]),
  .button[type="submit"]:focus:not([disabled]) {
    outline: none;
  }

  .button[type="submit"] {
    background-color: var(--color-complimentary);
  }

  .button.buttonInvert {
    background-color: var(--color-dark);
    color: var(--color-neutral);
  }

  .button.buttonInvert:hover:not([disabled]),
  .button.buttonInvert:focus:not([disabled]) {
    background-color: var(--color-accent);
  }

  .button[disabled] {
    background-color: var(--color-dark);
    opacity: 0.3;
  }
</style>
