<script lang="ts">
  import clipboard from 'clipboardy';
  export let emoji: IEmoji = {
    name: '',
    content: '',
    represent: '',
    description: '',
  };
  $:innerText = emoji.content;
  let copied = false;
  let hovering = false;
  async function copy() {
    try {
      await clipboard.write(innerText);
      copied = true;
      setTimeout(() => {
        copied = false;
      }, 500);
    } catch (err) {
      console.error(err);
    }
  }
  function hover() {
    hovering = true;
  }
</script>

<div class="flex flex-col justify-center items-center">
  <div
    class="h-14 w-14 hover:shadow-lg p-2
  hover:bg-gray-700 bg-gray-200 opacity-70 flex justify-center 
  items-center cursor-pointer 
  rounded-full hover:ring-4
  shadow-inner
  text-2xl
  transition-all duration-200
  "
    on:mouseover={hover}
    on:focus={hover}
    on:mouseleave={() => {
      hovering = false;
    }}
    on:click={copy}
    class:hovering
    class:copy-success={copied}
    draggable="true"
    on:dragstart={ev => {
      ev.dataTransfer.setData('text/plain', innerText);
    }}
  >
    <span class:copied class="select-none">{innerText}</span>
  </div>
  <div class="text-md" class:text-xs={emoji.represent.length > 10}>{emoji.represent}</div>
</div>

<style>
  .copied {
    transform: scale(1.2);
    transition: all 0.5s;
  }
  .copy-success {
    background-color: #86efac;
    @apply bg-green-300;
  }
  @keyframes randomMovearound {
    from {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0, 2px);
    }
    to {
      transform: translate(0, 0);
    }
  }
  .hovering {
    animation: randomMovearound 2s infinite ease-in;
  }
</style>
