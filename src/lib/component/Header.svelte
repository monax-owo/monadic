<script lang="ts">
	//
</script>

<header class="header">
	<div class="header-content mw">
		<slot name="logo">LOGO HERE</slot>
		<slot></slot>
	</div>
</header>

<style lang="postcss">
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	.header {
		width: 100vw;

		& .header-content {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			margin: 0 auto;
			width: 80vw;
			max-width: 1024px;
			height: 64px;

			& slot[name="logo"] {
				--uno: bg-[#9d7777];

				display: flex;
				align-items: center;
				padding: 8px;
			}
		}
	}
</style>
