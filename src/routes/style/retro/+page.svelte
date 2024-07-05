<script lang="ts">
  import Template from "$lib/component/Template.svelte";
  import "$lib/global.scss";
  import { setDefaultTheme } from "$lib/theme/theme";
  import { onMount } from "svelte";
  onMount(() => {
    return () => {
      setDefaultTheme();
    };
  });
</script>

<svelte:head>
  <script>
    setTheme("retro");
  </script>
</svelte:head>

<Template>
  <div class="page">
    <div class="retro-1">RETRO</div>
  </div>
</Template>

<style lang="scss">
  @use "$lib/global.scss" as *;
  :global(:root[data-theme="retro"]) {
    --bg: #c7bfa9;
    --text: #4b4b4b;
    --b-dark: #{Darkest(var(--bg), 90%)};
    --b-light: #{Lightest(var(--bg), 80%)};
    --test: #000;
    --b-radius: 24px;
    --s: var(--bg);
    --s-blur: 4px;
    --s-spread: 2px;
  }

  @mixin retro-shadow() {
    box-shadow:
      inset bs(0, 0),
      bs(0, 0);
  }

  @function bs($x, $y) {
    @return $x $y var(--s-blur) var(--s-spread) var(--s);
  }

  .retro-1 {
    position: relative;
    border: calc(var(--b-radius) / 2) solid;
    border-color: var(--b-dark) var(--b-light) var(--b-light) var(--b-dark);
    border-radius: var(--b-radius);
    background: var(--bg);
    padding: 20px;
    color: var(--text);
    text-align: center;
    &::after,
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      box-shadow:
        inset bs(0, 0),
        bs(0, 0);
      border-radius: calc(var(--b-radius) / 2);
      background: transparent;
      width: 100%;
      height: 100%;
      content: "";
    }
    &::before {
      padding: 20px;
      width: calc(100% + calc(var(--b-radius) / 2));
      height: calc(100% + calc(var(--b-radius) / 2));
    }
  }
</style>
