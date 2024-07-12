<script lang="ts">
  import Todo from "$lib/component/dev/Todo.svelte";
  import RouteLinker from "$lib/component/RouteLinker.svelte";
  import Template from "$lib/component/Template.svelte";
  const routes = {
    "/test": "Test",
    "/test/media-query": "Media Query",
    "/test/preact": "Preact",
  };
</script>

<Template>
  <Todo>
    <p>ページのタイトルをstoreで管理するようにする</p>
    <p>各+page.svelteにタイトルを決める関数を設置するようにする</p>
    <p>テーマ切り替えを行えるようにする→theme/ToggleTheme.svelte</p>
    <p>1つの色からテーマを作るSass関数を作る(like tailwind)</p>
    <p>ファイルサイズの最適化</p>
    <p data-done>Preactに移行(helper.tsx)</p>
    <!-- "$lib/theme/ToggleTheme.svelte" -->
  </Todo>
  <RouteLinker {routes}></RouteLinker>
</Template>

<style lang="scss">
  //
</style>
