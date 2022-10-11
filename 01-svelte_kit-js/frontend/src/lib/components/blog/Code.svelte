<script>
  export let content = "";
</script>

<div class="code">
  <pre><code>{content}</code></pre>
  <button type="button" onclick="copyCode(event)" class="button copyCode">
    copy code
  </button>
</div>

<style>
  .code {
    position: relative;
  }
</style>
