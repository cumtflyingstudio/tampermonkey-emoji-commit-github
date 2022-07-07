<script lang="ts">
  export let type: string = 'right';
</script>

{#if type === 'right'}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    viewBox="0 0 1024 1024"
    ><path
      fill="currentColor"
      d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8l-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
    /></svg
  >
{:else if type === 'left'}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    viewBox="0 0 1024 1024"
    ><path
      fill="currentColor"
      d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"
    /></svg
  >
{/if}
