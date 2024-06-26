<script lang="ts">
	import { paintChar1, paintChar2 } from "./store";
</script>

<button type="button" class="Canvas">
	<span></span>
</button>

<style lang="scss">
	@use "$lib/style/_mixin" as *;
	.Canvas {
		appearance: none;
		border: none;
		--canvas-size: 16px;
		padding: 0;
		width: var(--canvas-size);
		height: var(--canvas-size);
		@include media(sm) {
			--canvas-size: 24px;
		}
		@include media(md) {
			--canvas-size: 32px;
		}
	}
</style>
