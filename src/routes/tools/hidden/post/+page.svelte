<script lang="ts">
	import Textarea from "$lib/component/Textarea.svelte";
	// tweet text
	let text = "";
	$: tweet = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text);
	// textarea
	let ratio = 8;
	$: aspectRatio = `100/${ratio}`;
</script>

<div class="post">
	<input type="range" min="10" max="60" bind:value={ratio} />
	<textarea placeholder="type tweet..." bind:value={text} style:aspect-ratio={aspectRatio}></textarea>
	<div class="link">
		<button
			on:click={() => {
				window.open(tweet);
			}}>Post</button
		>
		<div>{tweet}</div>
	</div>
	<Textarea></Textarea>
</div>

<style lang="scss">
	.post {
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
