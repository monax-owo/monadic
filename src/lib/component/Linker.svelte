<script lang="ts">
	import type { Route } from "$lib/route/routes";
	export let routes: Route[];
</script>

<div id="Linker">
	{#each routes as route}
		<!-- <div class=""> -->
		<a href={route.link}>{route.title}</a>
		<!-- </div> -->
	{/each}
</div>

<style lang="scss">
	#Linker {
		display: flex;
		flex-direction: column;
		a {
			color: var(--text);
			text-decoration: none;
			&:hover {
				text-decoration: underline;
			}
		}
	}
</style>
