<script lang="ts">
	import "virtual:uno.css";
	import "@unocss/reset/normalize.css";
	import Breadcrumb from "$lib/component/Breadcrumb.svelte";
	import { page } from "$app/stores";
</script>

<div id="app" class="m-0 p-0">
	<Breadcrumb></Breadcrumb>
	<h1>{$page.route.id}</h1>
	<div class="p-4rem">
		<slot />
	</div>
</div>

<style lang="scss">
	//
</style>
