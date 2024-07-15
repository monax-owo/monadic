<script lang="ts">
  // icons
  import IconBrandGithub from "@tabler/icons-svelte/IconBrandGithub.svelte";
  import IconBrandSvelte from "@tabler/icons-svelte/IconBrandSvelte.svelte";
  import IconBrandYoutube from "@tabler/icons-svelte/IconBrandYoutube.svelte";
  const iconStrokeWidth = 1.8;
</script>

<div class="SNSLinks">
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

<style lang="scss">
  .SNSLinks {
    display: flex;
    flex-direction: row;
    & a {
      border-radius: var(--b-radius);
      padding: 6px;
    }
  }
</style>
