<script lang="ts">
	import Template from "$lib/component/Template.svelte";
	import Todo from "$lib/component/dev/Todo.svelte";
	import { afterUpdate } from "svelte";
	let el: Element;
	// Default value
	let [color1, color2]: string[] = ["#000000", "#ffffff"];
	let [p1, p2]: number[] = [20, 80];
	// color type
	const colorType = ["srgb", "srgb-linear", "lab", "oklab", "xyz", "xyz-d50", "xyz-d65"] as const;
	type RectangularColorSpace = (typeof colorType)[number];
	// current
	let selectIndex: number = 0;
	let currentColorType: RectangularColorSpace;
	$: currentColorType = colorType[selectIndex];
	$: mix = `color-mix(in ${currentColorType}, ${color1} ${p1}%, ${color2} ${p2}%)`;
	// result
	let result: string = "waiting...";
	let splitResult: string[];
	afterUpdate(() => {
		result = window.getComputedStyle(el).getPropertyValue("background-color");
		splitResult = result.replace(/color|[()]/g, "").split(" ");
	});
</script>

<Todo>
	<p>Input要素を右クリックでクリア</p>
	<p>右クリック2回で通常のコンテキストメニュー</p>
</Todo>
<div class="page">
	<div class="view" bind:this={el} style:--mix={mix}></div>
	<div class="container">
		<div class="color-type">
			<select bind:value={selectIndex} size={colorType.length}>
				{#each colorType as type, i}
					<option value={i}>{type}</option>
				{/each}
			</select>
		</div>
		<div class="prop">
			<input type="color" bind:value={color1} />
			<input type="text" bind:value={color1} on:contextmenu|stopPropagation|preventDefault={(e) => e.currentTarget.select()} />
			<div class="">
				<input type="range" min="0" max="100" step="1" bind:value={p1} />
				<input type="number" bind:value={p1} />
			</div>
		</div>
		<div class="prop">
			<input type="color" bind:value={color2} />
			<input type="text" bind:value={color2} />
			<div class="">
				<input type="range" min="0" max="100" step="1" bind:value={p2} />
				<input type="number" bind:value={p2} />
			</div>
		</div>
	</div>
	<code>{mix}</code>
	<span>↓</span>
	<code>{result}</code>
	<code>splitResult: {JSON.stringify(splitResult, null)}</code>
</div>

<style lang="scss">
	.page {
		display: flex;
		flex-direction: column;
	}
	.view {
		background-color: var(--mix);
		height: 50vh;
	}
	.container {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		& input {
			display: inline-flex;
		}
	}
	.color-type {
		--test: rgb(96, 96, 96);
		margin: 12px 24px;
	}

	.prop {
		margin: 24px;
	}
	input[type="number"] {
		width: 48px;
	}
</style>
