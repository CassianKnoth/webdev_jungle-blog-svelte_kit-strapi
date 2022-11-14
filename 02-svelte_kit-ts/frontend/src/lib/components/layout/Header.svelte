<script lang="ts">
</script>

<header>
  <a href="/" class="logo monospace">webdev jungle</a>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: var(--color-neutral);
    border-bottom: 2px solid var(--color-dark);
    padding: 1rem var(--gap);
    position: sticky;
    top: 0;
    z-index: 2;
  }

  header a {
    text-decoration: none;
    color: var(--color-accent);
  }

  header .logo {
    font-size: 1.2rem;
  }

  header .logo::after {
    content: none;
  }
</style>
