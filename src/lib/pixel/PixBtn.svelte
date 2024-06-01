<script lang="ts">
	import "@fontsource/press-start-2p";
	let buttonMode: boolean = true;
</script>

<button class="btn" class:pixel={buttonMode}>
	<slot></slot>
</button>
<button
	type="button"
	on:click={() => {
		buttonMode = !buttonMode;
	}}>toggle</button
>

<style lang="scss">
	$PIXEL_SIZE: 6px;
	@function p($size) {
		@return $size * $PIXEL_SIZE;
	}
	// box-shadowに渡す値を返す
	@function shadow($x, $y, $color) {
		@return p($x) p($y) $color;
	}
	// shadow()の x,y がList型の場合に使う
	@function shadow-axis($axis, $color) {
		$x: nth($axis, 1);
		$y: nth($axis, 2);
		@return shadow($x, $y, $color);
	}
	// リストと添え字を渡すとインデックス個目のリストの値を返す
	@function index4($list, $index) {
		@return nth($list, (($index - 1) % 4)+ 1);
	}
	// 上下左右のxyを短くするために使う
	// 添え字と倍率を渡すとインデックス個目の値に倍率をかけて返す
	@function border-pos($index, $scale: 1) {
		$axis: ((0, -$scale), (0, $scale), (-$scale, 0), ($scale, 0));
		@return index4($axis, $index);
	}
	// 上下左右にボーダーをつける
	@function bs-border($color, $scale: 1) {
		$tmp: ();
		@for $i from 1 through 4 {
			$tmp: append($tmp, shadow-axis(border-pos($i, $scale), $color), comma);
		}
		@return $tmp;
	}
	// 斜めのxy
	@function corner-pos($index, $scale: 1) {
		$axis: ((-$scale, -$scale), ($scale, -$scale), ($scale, $scale), (-$scale, $scale));
		@return index4($axis, $index);
	}
	// 斜めにボーダーを付ける
	@function bs-corner($color, $scale: 1) {
		$tmp: ();
		@for $i from 1 through 4 {
			$tmp: append($tmp, shadow-axis(corner-pos($i, $scale), $color), comma);
		}
		@return $tmp;
	}
	@debug corner-pos(1, 1);
	//

	.pixel {
		appearance: none;

		box-shadow: bs-border(rgb(199, 198, 198)), bs-border(dimgray, 2), bs-corner(dimgray);
		border: none;
		border-radius: 0%;
		background: rgb(163, 162, 162);
		// padding: 2px 0 1px;

		font-family: "Press Start 2P";
		text-align: center;
		&::before {
			width: p(1);
			height: p(1);
		}
	}

	.btn {
		display: block;
		margin: p(2);
		padding: 0;
		width: p(55);
		height: p(11);
		overflow: hidden;
		font-size: p(9);
	}
</style>
