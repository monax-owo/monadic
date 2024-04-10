<script lang="ts">
	import "virtual:uno.css";
	import "@unocss/reset/normalize.css";
	import Breadcrumb from "$lib/component/Breadcrumb.svelte";
	import { page } from "$app/stores";
</script>

<div id="app">
	<header class="b">
		<Breadcrumb></Breadcrumb>
		<div>{$page.route.id}</div>
	</header>

	<div class="p-4rem">
		<slot />
	</div>
</div>
<!-- 
<style lang="scss">
	#header {
		border-bottom: 1px solid black;
	}
</style> -->
