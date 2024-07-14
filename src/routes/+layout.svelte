<script lang="ts">
  // rest css
  import "$lib/global.scss";
  import "$lib/util.scss";
  import "sanitize.css/assets.css";
  import "sanitize.css/sanitize.css";
  //
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  // fonts
  // Montserrat
  // Supports weights 100-900
  import "@fontsource-variable/montserrat";
  // Noto Sans JP
  // Supports weights 100-900
  import "@fontsource-variable/noto-sans-jp";
  // Noto Color Emoji
  import "@fontsource/noto-color-emoji";
  // Header
  import Header from "$lib/component/Header.svelte";
  // icons
  import IconBrandGithub from "@tabler/icons-svelte/IconBrandGithub.svelte";
  import IconBrandSvelte from "@tabler/icons-svelte/IconBrandSvelte.svelte";
  import IconBrandYoutube from "@tabler/icons-svelte/IconBrandYoutube.svelte";
  const iconStrokeWidth = 1.8;
  // title
  import { setTitle } from "$lib/route/routes";
  $: title = setTitle($page.route.id ?? "no title");
  // form
  import { enhance } from "$app/forms";
  import { afterNavigate, goto } from "$app/navigation";
  import IsDev from "$lib/component/dev/IsDev.svelte";
  let nowRouteId: string = "/";
  const updateUrlInput = () => {
    nowRouteId = $page.url.pathname.replace(base, "");
  };
  //
  let app: HTMLElement;
  afterNavigate(() => {
    updateUrlInput();
    app.focus();
  });
  //
  // const og = {};
  import type { LayoutData } from "./$types";
  export let data: LayoutData;
  let og = data.og;
</script>

<svelte:head>
  <title>{title.length > 0 ? `${title} | ` : ""}Monadic</title>
  <!-- ogp -->
  <meta name="description" content={og.desc} />
  <meta property="og:title" content={og.title} />
  <meta property="og:image" content={og.image} />
  <meta property="og:description" content={og.desc} />
  <!-- setting Theme -->
  <script>
    setDefaultTheme();
  </script>
</svelte:head>

<div class="app" bind:this={app}>
  <IsDev>is dev!</IsDev>
  <Header>
    <a class="hover-1" href="{base}/" slot="logo">Monadic</a>
    <form
      class="url-input"
      method="post"
      use:enhance={({ formData }) => {
        // let url = formData.get("url")?.toString() ?? "404";
        goto(`${base}${formData.get("url")?.toString()}` ?? "404", { noScroll: true });
      }}>
      <input type="text" name="url" bind:value={nowRouteId} />
    </form>
    <div class="sns-link" slot="link">
      <a class="hover-1" href="https://github.com/monax-owo/monadic">
        <IconBrandGithub stroke={iconStrokeWidth} />
      </a>
      <a class="hover-1" href="https://kit.svelte.jp">
        <IconBrandSvelte stroke={iconStrokeWidth} />
      </a>
      <a class="hover-1" href="https://www.youtube.com/@energymonaka/featured">
        <IconBrandYoutube stroke={iconStrokeWidth} />
      </a>
    </div>
  </Header>
  <slot />
</div>

<style lang="scss">
  :global(:root) {
    --test: #fff;
  }
  :global(html) {
    background: var(--bg);
  }
  .app {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .url-input {
    // border: 2px solid var(--b-bg);
    // border-radius: 6px;
    width: 100%;
    &:focus {
      border: 0 solid transparent;
    }
    & input {
      appearance: none;
      border: 0 solid transparent;
      border-radius: 6px;
      background: var(--bg);
      padding: 10px;
      width: 100%;
      height: calc(var(--Header-h) / 2);
      color: var(--text);
      &:focus {
        outline: var(--highlight-size) solid var(--highlight-bg);
      }
    }
  }
  .sns-link {
    display: flex;
    flex-direction: row;
    & a {
      border-radius: var(--b-radius);
      padding: 6px;
    }
  }
</style>
