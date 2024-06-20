<script lang="ts">
	import "$lib/global.scss";
	import { setDefaultTheme } from "$lib/theme/theme";
	import { onMount } from "svelte";

	onMount(() => {
		return () => {
			setDefaultTheme();
		};
	});
</script>

<svelte:head>
	<script>
		setTheme("retro");
	</script>
</svelte:head>

<div>
	<div class="retro">RETRO</div>
</div>

<style>
	:global(:root[theme="retro"]) {
		--bg: #c7bfa9;
		--text: #4b4b4b;
		--b-dark: #c7bfa9;
		--b-light: #000;
		--test: #000;
	}

	.retro {
		border-width: 12px;
		border-style: inset;
		border-color: (--b-dark) var(--b-light) var(--b-light) var(--b-dark);
		border-radius: 24px;
		background: var(--bg);
		padding: 20px;
		color: var(--text);
		text-align: center;
	}
</style>
