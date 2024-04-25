<script lang="ts">
	import "virtual:uno.css";
	import "@unocss/reset/sanitize/sanitize.css";
	import "@unocss/reset/sanitize/assets.css";
	import Header from "$lib/component/Header.svelte";
	import { setTitle } from "$lib/route/routes";
	import { page } from "$app/stores";
	let title: string;
	$: title = setTitle($page.route.id ?? "/");
</script>

<svelte:head>
	<title>{title.length > 0 ? `${title} |` : ""} Monadic</title>
</svelte:head>

<div id="app">
	<Header>
		<!--  -->
	</Header>
	<pre>{$page.url.pathname}</pre>
	<div class="p-4rem">
		<slot />
	</div>
</div>

<style>
	#app {
		background: #dedede;
		display: grid;
		grid-template-columns: 1;
	}
</style>
