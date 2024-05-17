<script lang="ts">
	//
</script>

<button class="pixel btn">
	<slot></slot>
</button>

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
	@function border-xy($index, $scale: 1) {
		$axis: ((0, -$scale), (0, $scale), (-$scale, 0), ($scale, 0));
		@return index4($axis, $index);
	}
	// 上下左右にボーダーをつける
	@function bs-border($color, $scale: 1) {
		$tmp: ();
		@for $i from 1 through 4 {
			$tmp: append($tmp, shadow-axis(border-xy($i, $scale), $color), comma);
		}
		@return $tmp;
	}
	// 斜めのxy
	@function x-xy($index, $scale: 1) {
		$axis: ((-$scale, -$scale), ($scale, -$scale), ($scale, $scale), (-$scale, $scale));
		@return index4($axis, $index);
	}
	// 斜めにボーダーを付ける
	@function bs-x($color, $scale: 1) {
		$tmp: ();
		@for $i from 1 through 4 {
			$tmp: append($tmp, shadow-axis(x-xy($i, $scale), $color), comma);
		}
		@return $tmp;
	}

	@layer one {
		.pixel {
			appearance: none;
			box-shadow: bs-border(gray), bs-border(black, 2), bs-x(black);
			border: p(1);
			border-radius: 0%;
		}
	}
	.btn {
		width: p(20);
		height: p(6);
	}
</style>
