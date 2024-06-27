<script lang="ts">
</script>

<div class="Portfolio">
	<div class="icon">
		<slot name="icon"></slot>
	</div>
	<div class="name">
		<slot name="name"></slot>
	</div>
	<div class="profile">
		<slot name="profile"></slot>
	</div>
</div>

<style lang="scss">
	.Portfolio {
		display: flex;
		flex-direction: column;
		justify-content: center;
		.icon {
			display: flex;
			justify-content: center;
			:global(img) {
				border-radius: var(--Icon-b-radius);
				aspect-ratio: 1;
				width: var(--Icon-size);
			}
		}
		.name {
			display: flex;
			justify-content: center;
			& :global(*) {
				font-weight: bold;
				font-size: 1.6rem;
			}
		}
	}
</style>
