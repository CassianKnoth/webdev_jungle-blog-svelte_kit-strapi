<script>
  import Link from "$lib/components/links/Link.svelte";
  const linkData = {
    destination: "/",
    title: "Imprint",
    alt: "Link to imprint",
  };
</script>

<footer>
  <p>&copy; Copyright 2022</p>
  <Link {...linkData} />
</footer>

<style>
  footer {
    width: 100vw;
    background-color: var(--color-dark);
    text-align: center;
    padding: var(--gap);
    color: var(--color-neutral);
    bottom: 0;
  }

  footer p {
    margin-bottom: 1rem;
  }
</style>
