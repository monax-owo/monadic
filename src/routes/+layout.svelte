<script lang="ts">
	import "virtual:uno.css";
	import "@unocss/reset/sanitize/sanitize.css";
	import "@unocss/reset/sanitize/assets.css";
	import Breadcrumb from "$lib/component/Breadcrumb.svelte";
	import { page } from "$app/stores";
</script>

<div id="app">
	<header id="header">
		<Breadcrumb></Breadcrumb>
		<div>{$page.route.id}</div>
	</header>

	<div class="p-4rem">
		<slot />
	</div>
</div>

<style lang="scss">
	#app {
		width: 100vh;
		height: 100vh;
	}
	#header {
		border-bottom: 1px solid black;
	}
</style>
