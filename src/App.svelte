<script>
  export let name;
</script>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>

  <p>
    <strong>We are using</strong>
  </p>
  <p>Node {process.versions.node}</p>
  <p>Chrome {process.versions.chrome}</p>
  <p>Electronsss {process.versions.electron}</p>
</main>
