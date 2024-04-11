<script lang="ts">
	import Textarea from "$lib/component/Textarea.svelte";
	// tweet text
	let text: string = "";
	let tweet: string;
	$: tweet = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text);
	// textarea
	let ratio: number = 8;
	let aspectRatio: string;
	$: aspectRatio = `100/${ratio}`;
</script>

<svelte:head>
	<title>Post</title>
</svelte:head>
<div class="flex flex-col justify-center p-4">
	<input class="my-4" type="range" min="10" max="60" bind:value={ratio} />
	<textarea class="h-auto" placeholder="type tweet..." bind:value={text} style:aspect-ratio={aspectRatio}></textarea>
	<div class="link">
		<button
			on:click={() => {
				window.open(tweet);
			}}
		>
			Post
		</button>
		{tweet}
	</div>
	<Textarea></Textarea>
</div>

<style lang="scss">
	* {
		display: block;
	}
	textarea {
		resize: none;
		width: 100%;
		aspect-ratio: 5/2;
	}
	.link {
		text-align: center;
		margin: 20px 0px;
	}
</style>
