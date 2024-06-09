<script lang="ts">
	let histories: string[] = [];
	function keyTester(event: { key: string }) {
		histories = [event.key, ...histories];
	}
	$: if (histories.length > 10) histories.pop();
</script>

<svelte:window on:keydown={keyTester} />

<div class="histories shadow-1">
	{#if histories.length !== 0}
		{#each histories as history}
			<li>{history}</li>
		{/each}
	{:else}
		<div>press key!</div>
	{/if}
</div>

<style lang="scss">
	.histories {
		margin: 32px auto;
		border-radius: var(--Header-radius);
		padding: 16px;
		width: 600px;
	}
</style>
