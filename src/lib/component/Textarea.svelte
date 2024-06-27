<script lang="ts">
	export let value: string = "";
	export let placeholder: string = "";
	export const copy = () => {
		return;
	};
	let minH: string;
	let maxH: string;
	$: minH = `4rem`;
	$: maxH = `auto`;
</script>

<!-- copy機能の実装 -->
<!-- https://developer.mozilla.org/ja/docs/Web/API/Element/copy_event -->
<div class="Textarea">
	<div aria-hidden="true" style:min-height={minH} style:max-height={maxH}>{value}</div>
	<textarea bind:value {placeholder}></textarea>
</div>

<style lang="scss">
	.Textarea {
		position: relative;

		& > * {
			box-sizing: border-box;
			padding: 0.5rem;
			overflow: hidden;
		}

		& > textarea {
			position: absolute;
			top: 0;
			width: 100%;
			height: 100%;
			resize: none;
		}
	}
</style>
