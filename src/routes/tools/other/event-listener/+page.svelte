<script lang="ts">
  import Template from "$lib/component/Template.svelte";
  import { onMount } from "svelte";
  let b: HTMLButtonElement;
  const eventType: (keyof GlobalEventHandlersEventMap)[] = [
    "auxclick",
    "click",
    "contextmenu",
    "dblclick",
    "gotpointercapture",
    "lostpointercapture",
    "mousedown",
    "mouseenter",
    "mouseleave",
    "mousemove",
    "mouseout",
    "mouseover",
    "mouseup",
    "pointercancel",
    "pointerdown",
    "pointerenter",
    "pointerleave",
    "pointermove",
    "pointerout",
    "pointerover",
    "pointerup",
    "touchcancel",
    "touchend",
    "touchmove",
    "touchstart",
  ];
  onMount(() => {
    eventType.forEach(value => {
      b.addEventListener("click", () => console.log(value));
    });
  });
</script>

<Template>
  <button type="button" bind:this={b}>Click me!</button>
</Template>
