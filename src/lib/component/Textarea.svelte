<script lang="ts">
	import '@unocss/reset/normalize.css';
	export let value: string = '';
	export let placeholder: string = '';
	let minH: string;
	let maxH: string;
	$: minH = `4rem`;
	$: maxH = `auto`;
</script>

<div id="textarea">
	<div aria-hidden="true" style:min-height={minH} style:max-height={maxH}>{value}</div>
	<textarea bind:value {placeholder}></textarea>
</div>

<style lang="scss">
	#textarea {
		position: relative;
		& > * {
			padding: 0.5rem;
			box-sizing: border-box;
			overflow: hidden;
		}
		& > textarea {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			resize: none;
		}
	}
</style>
