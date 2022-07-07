<script lang="ts">

  import CopyButton from '../components/CopyButton.svelte';
  import { fly, fade } from 'svelte/transition';
  import emojis from '../emojis.json';
  import ShowButton from '../components/ShowButton.svelte';
  let arr = emojis;
  // visible
  let visible = true;
  const toggle = () => (visible = !visible);

  //input
  let input = '';
  $: arr = emojis.filter(i => {
    if (input === '') return true;
    let flag = false;
    Object.keys(i).forEach(k => {
      typeof i[k] === 'string' && i[k].includes(input) && (flag = true);
    });
    return flag;
  });
</script>

{#if visible}
  <div
    class=" fixed right-0 top-40 flex justify-center items-center rounded-l-3xl border shadow-lg backdrop:filter bg-main"
    in:fly={{ x: 100, duration: 500 }}
    out:fly={{ x: 100, duration: 500 }}
  >
    <button on:click={toggle}>
      <ShowButton type="right"/>
    </button>
    <div class="">
      <div class="w-full py-4">
        <input
          bind:value={input}
          type="text"
          class="w-full h-10 px-4 rounded-full bg-gray-200 "
          placeholder="search something"
        />
      </div>
      <div class="main overflow-y-scroll p-4 no-scrollbar">
        <div class="grid grid-cols-2 gap-4">
          {#each arr as item (item.content)}
            <CopyButton emoji={item} />
          {/each}
        </div>
      </div>
    </div>
  </div>
{:else}
  <button on:click={toggle} class="fixed right-0 top-center">
    <ShowButton type="left" />
  </button>
{/if}

<style>
  .bg-main {
    background-color: rgba(255, 255, 255, 0.7);
  }
  .main {
    height: 400px;
    width: 300px;
  }
  .top-center {
    top: calc(10rem + 200px);
  }

  .no-scrollbar::-webkit-scrollbar {
    width: 5px !important;
  }
</style>
