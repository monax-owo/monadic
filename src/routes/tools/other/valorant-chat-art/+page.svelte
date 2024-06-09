<script lang="ts">
	let paintCode: Array<String> = ["█"];
	let nowPaintChar: String = "";
</script>

<div>
	<div class="canvas">
		{#each Array(7) as _, i}
			<div></div>
		{/each}
	</div>
</div>

<style lang="scss">
	.canvas {
	}
</style>
