<script lang="ts">
  import { Template, Todo } from "$lib/autoimport";
</script>

<Template>
  <div class="mq"></div>
</Template>

<style lang="scss">
  @use "$lib/global.scss" as *;
  .mq {
    margin: 0 auto;
    width: 8rem;
    font-size: 2rem;
    &::before {
      color: #fff;
      --v: "sm";
      content: var(--v);
      @include media(sm) {
        --v: "sm";
      }
      @include media(md) {
        --v: "md";
      }
      @include media(lg) {
        --v: "lg";
      }
      @include media(xl) {
        --v: "xl";
      }
      @include media(2xl) {
        --v: "2xl";
      }
    }
  }
</style>
