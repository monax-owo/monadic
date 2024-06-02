<script lang="ts">
	import type { Route } from "$lib/route/routes";
	export let routes: Route[];
</script>

<div class="link-container">
	{#each routes as route}
		<a href={route.link}>{route.title}</a>
	{/each}
</div>

<style lang="scss">
	.link-container {
		display: flex;
		flex-direction: column;
		a {
			text-decoration: none;
			color: var(--text);
		}
	}
</style>
