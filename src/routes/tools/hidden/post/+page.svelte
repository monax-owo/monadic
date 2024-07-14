<script lang="ts">
  import Post from "$components/Post.svelte";
  import Template from "$components/Template.svelte";
  // import Textarea from "$components/input/Textarea.svelte";
  import { clickCopy } from "$lib/util/clipboard";
  import { tweet } from "$lib/util/sns";
  import "$lib/util/sns";
  let text: string = "";
  let ratio = 18;
  $: aspectRatio = `100/${ratio}`;
</script>

<Template>
  <div class="page">
    <input type="range" min="10" max="60" bind:value={ratio} />
    <textarea placeholder="type tweet..." bind:value={text} style:aspect-ratio={aspectRatio}
    ></textarea>
    <div class="link">
      <button type="button" on:click={() => tweet(text).open()}>Tweet</button>
      <button type="button" use:clickCopy={text}>Copy</button>
      <Post desc={text}>Tweet</Post>
      <div>{tweet(text)}</div>
    </div>
    <!-- <Textarea></Textarea> -->
  </div>
</Template>

<style lang="scss">
  .page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 16px;
    & input {
      margin: 8px 0;
    }
    & textarea {
      height: auto;
    }
  }

  textarea {
    aspect-ratio: 5/2;
    width: 100%;
    resize: none;
  }

  .link {
    margin: 20px 0;
    text-align: center;
  }
</style>
