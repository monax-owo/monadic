<script lang="ts">
  import Template from "$components/Template.svelte";
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
  const on = (value: keyof GlobalEventHandlersEventMap, i: number) => {
    console.log(value, i);
  };
  onMount(() => {
    eventType.forEach((value, i) => {
      b.addEventListener(value, () => on(value, i));
    });
  });
</script>

<Template>
  <button type="button" bind:this={b}>Click me!</button>
  <div class="event-list">
    {#each eventType as value, i}
      <div class="value">{value}<span>{i}</span></div>
    {/each}
  </div>
</Template>

<style lang="scss">
  button {
    display: block;
    margin: 32px auto;
    width: 160px;
    height: 60px;
  }
  .value {
    span {
      display: inline-block;
      padding: 0 8px;
      color: #9980ff;
    }
  }
</style>
