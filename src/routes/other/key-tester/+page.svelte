<script lang="ts">
	let histories: string[] = [];
	let text: string;
	function keyTester(event: { key: string }) {
		text = event.key;
		histories = [event.key, ...histories];
	}
</script>

<svelte:window on:keydown={keyTester} />

{#if histories.length !== 0}
	<ul>
		{#each histories as history}
			<li>{`${history}`}</li>
		{/each}
	</ul>
{:else}
	<div>press key!</div>
{/if}
