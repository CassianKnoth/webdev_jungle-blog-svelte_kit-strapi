<script lang="ts">
  import "../styles/global.css";
  import Header from "$lib/components/layout/Header.svelte";
  import Footer from "$lib/components/layout/Footer.svelte";
</script>

<Header />
<main>
  <slot />
</main>
<Footer />

<style>
  main {
    min-height: 100vh;
    padding: var(--gap);
  }
</style>
