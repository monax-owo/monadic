<script lang="ts">
  import Warn from "$components/note/Warn.svelte";
  import Info from "$components/note/Info.svelte";
  import RouteLinker from "$components/RouteLinker.svelte";
  import Template from "$components/Template.svelte";
  const routes = {
    "/test": "Test",
    "/route": "Route",
  };
</script>

<Template>
  <Info>
    <div>info</div>
  </Info>
  <Warn>
    <p>ページのタイトルをstoreで管理するようにする</p>
    <p>各+page.svelteにタイトルを決める関数を設置するようにする</p>
    <p>テーマ切り替えを行えるようにする→theme/ToggleTheme.svelte</p>
    <p>1つの色からテーマを作るSass関数を作る(like tailwind)</p>
    <p>ファイルサイズの最適化</p>
    <p data-done>Preactに移行(helper.tsx)</p>
    <p>バリデーションをする</p>
    <p>モバイル向けのスタイルを書く</p>
    <p>ogpに対応させる(+layout.svelte)</p>
    <p>色を調整する(note)</p>
    <p>ObjectからMapに移行する(route.ts)</p>
    <p>モバイルのときCanvasを縦にする(valorant-chat-art)</p>
    <p>モバイルでpaintingがtrueのままになる問題(valorant-chat-art)</p>
    <p>
      モバイルのときはイベントからpixelに被っているか判定(めんどい)(valorant-chat-art)
    </p>
    <!-- "$lib/theme/ToggleTheme.svelte" -->
  </Warn>
  <RouteLinker {routes}></RouteLinker>
</Template>

<style lang="scss">
  //
</style>
