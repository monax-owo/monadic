<script lang="ts">
  import Template from "$lib/component/Template.svelte";
  import { attachReactComponent } from "$lib/util/react/helper";
  import { onMount } from "svelte";
  import React from "react";
  import ReactDOM from "react-dom/client";
  import Page from "./Page";
  let container: Element;
  onMount(() => {
    ReactDOM.createRoot(container).render(React.createElement(Page));
  });
</script>

<Template>
  <div bind:this={container}></div>
</Template>
