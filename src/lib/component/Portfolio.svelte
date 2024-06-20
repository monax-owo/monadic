<script lang="ts">
</script>

<div id="Portfolio">
	<div class="icon">
		<slot name="icon"></slot>
	</div>
</div>

<style lang="scss">
	#Portfolio {
		--icon-size: 240px;
		.icon :global(img) {
			aspect-ratio: 1;
			width: var(--icon-size);
		}
	}
</style>
