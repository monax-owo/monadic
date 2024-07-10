<script lang="ts">
  import Template from "$lib/component/Template.svelte";
  import Page from "./Page";
  import React from "react";
  import ReactDOM from "react-dom/client";
  let container;
  onMount(() => {
    ReactDOM.createRoot(container).render(React.createElement(Page));
  });
</script>

<!-- <script>
  import Template from "$lib/component/Template.svelte";
  import { h, render as re } from "preact";
  import Page from "./Page";
  let container;
  onMount(() => {
    re(Page, container);
    console.log(Page);
    console.log(Page());
  });
</script> -->

<Template>
  <div bind:this={container}></div>
</Template>
