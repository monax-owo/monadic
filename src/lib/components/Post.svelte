<script lang="ts">
  import { tweet } from "$lib/util/sns";

  export let desc: string = "aaa";
  export let tag: string | undefined = "";
  export let mention: string | undefined = "";
  let result: string;
  $: result = `${desc}${tag}${mention}`;
</script>

<div class="Post">
  <button type="button" on:click={() => tweet(result).open()}><slot>Tweet</slot></button>
</div>

<style lang="scss">
  .Post {
    display: inline-block;
  }
</style>
