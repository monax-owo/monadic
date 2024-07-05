<script lang="ts">
  import Todo from "$lib/component/dev/Todo.svelte";
  import Template from "$lib/component/Template.svelte";
</script>

<Template>
  <Todo>
    <p>ページのタイトルをstoreで管理するようにする</p>
    <p>各+page.svelteにタイトルを決める関数を設置するようにする</p>
    <p>テーマ切り替えを行えるようにする→theme/ToggleTheme.svelte</p>
    <!-- "$lib/theme/ToggleTheme.svelte" -->
  </Todo>
</Template>

<style lang="scss">
  //
</style>
