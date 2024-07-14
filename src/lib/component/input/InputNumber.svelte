<script lang="ts">
  export let name: string = "";
  export let id: string = "";
  export let min: string | number = "";
  export let max: string | number = "";
  export let value: number;

  let i: HTMLInputElement;

  type E = MouseEvent & {
    currentTarget: EventTarget & HTMLButtonElement;
  };

  const increment = (e: E) => {
    i.stepUp();
    value = parseFloat(i.value);
  };
  const decrement = (e: E) => {
    i.stepDown();
    value = parseFloat(i.value);
  };
</script>

<div class="InputNumber">
  <button type="button" on:click={decrement}>-</button>
  <input
    type="number"
    bind:this={i}
    bind:value
    {name}
    {id}
    {min}
    {max}
    on:change
    on:input
    on:focus />
  <button type="button" on:click={increment}>+</button>
</div>

<style lang="scss">
</style>
