<script lang="ts">
	import { page } from "$app/stores";
	if (import.meta.env.MODE !== "development") {
		console.log(`Todo.svelte here: ${$page.route.id}`);
	}
</script>

<div class="Todo">
	<div class="attention">
		<p>🚧under construction🚧</p>
	</div>
	<div class="comment">
		<slot></slot>
	</div>
</div>

<style lang="scss">
	.Todo {
		margin: 12px 0;
		border-radius: 12px;
		background: orange;
		padding: 12px 24px;
		color: var(--bg);
	}
	.attention {
		text-align: center;
	}
	.comment {
		text-align: center;
		:global(> *) {
			margin: 6px 12px;
		}
	}
</style>
