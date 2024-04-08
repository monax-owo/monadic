<script lang="ts">
	let color = '';
</script>

<div class="watcher">
	<input type="text" name="color" bind:value={color} />
	<div>{color}</div>
</div>

<style lang="postcss">
	.watcher {
	}
</style>
