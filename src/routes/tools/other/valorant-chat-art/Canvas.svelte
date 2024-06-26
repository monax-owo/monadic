<script lang="ts">
	import { paintChar1, paintChar2 } from "./store";
</script>

<div id="Canvas">
	<button type="button">
		<span></span>
	</button>
</div>

<style lang="scss">
	@use "$lib/style/_mixin" as *;
	#Canvas {
		& button {
			appearance: none;
			border: none;
			--canvas-size: 16px;
			width: var(--canvas-size);
			height: var(--canvas-size);
			@include media(sm) {
				--canvas-size: 24px;
			}
			@include media(md) {
				--canvas-size: 32px;
			}
		}
	}
</style>
