<script lang="ts">
	import Textarea from "$lib/component/Textarea.svelte";
	// tweet text
	let text = "";
	$: tweet = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text);
	// textarea
	let ratio = 8;
	$: aspectRatio = `100/${ratio}`;
	// Copy
</script>

<div class="page">
	<input type="range" min="10" max="60" bind:value={ratio} />
	<textarea placeholder="type tweet..." bind:value={text} style:aspect-ratio={aspectRatio}></textarea>
	<div class="link">
		<button type="button" on:click={() => window.open(tweet)}>Post</button>
		<button type="button" on:click={() => copy()}></button>
		<div>{tweet}</div>
	</div>
	<Textarea on:copy let:copy></Textarea>
</div>

<style lang="scss">
	.page {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 16px;
		& input {
			margin: 8px 0;
		}
		& textarea {
			height: auto;
		}
	}

	textarea {
		aspect-ratio: 5/2;
		width: 100%;
		resize: none;
	}

	.link {
		margin: 20px 0;
		text-align: center;
	}
</style>
