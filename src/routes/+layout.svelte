<script lang="ts">
	import "virtual:uno.css";
	import "@unocss/reset/sanitize/sanitize.css";
	import "@unocss/reset/sanitize/assets.css";
	import Header from "$lib/component/Header.svelte";
	import { page } from "$app/stores";
</script>

<div id="app">
	<Header>
		<!--  -->
	</Header>

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
