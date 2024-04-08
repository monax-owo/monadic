<script lang="ts">
	let text: string = '';
	let tweet: string;
	$: tweet = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(text);
	let ratio: number = 3;
	let aspectRatio: string;
	$: aspectRatio = `10/${ratio}`;
</script>

<svelte:head>
	<title>Post</title>
</svelte:head>
<div class="page">
	<div class="input-ratio">
		<label>
			<input type="range" min="0" max="20" bind:value={ratio} />{aspectRatio}
		</label>
	</div>

	<textarea
		class="round"
		bind:value={text}
		placeholder="type tweet..."
		style:aspect-ratio={aspectRatio}
	></textarea>
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
</div>

<style lang="postcss">
	.page {
		display: flex;
		flex-direction: column;
		justify-content: center;
		& > * {
			display: block;
		}
		& .input-ratio {
		}
		& textarea {
			resize: none;
			width: 100%;
			aspect-ratio: 5/2;
		}
		& .link {
			text-align: center;
			margin: 20px 0px;
			& a {
				font-size: 1.2rem;
			}
		}
	}
	.round {
		border: 1px solid rgb(145, 145, 145);
		border-radius: 6px;
		&:focus {
			border: 1px;
		}
	}
</style>
