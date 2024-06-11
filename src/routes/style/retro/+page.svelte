<script lang="ts">
	//
	import "$lib/global.scss";
</script>

<div>
	<div class="retro">aa</div>
</div>

<style lang="scss">
	@layer page {
		:global(:root) {
			--bg: #c7bfa9;
			--text: #4b4b4b;
			--b-dark: #c7bfa9;
			--b-light: #000;
		}
	}
	.retro {
		border-width: 12px;
		border-style: inset;
		border-color: (--b-dark) var(--b-light) var(--b-light) var(--b-dark);
		border-radius: 24px;
		background: var(--bg);
		padding: 20px;
		color: var(--text);
		text-align: center;
	}
</style>
