<script lang="ts">
	//
</script>

<header class="header">
	<div class="header-content">
		<slot name="logo">LOGO HERE</slot>
		<slot></slot>
	</div>
</header>

<style>
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
			align-items: center;
			justify-content: space-between;
			width: 80vw;
			max-width: 1152px;
			height: 64px;
			margin: 0 auto;

			& slot[name="logo"] {
				--uno: bg-[#9d7777];

				display: flex;
				align-items: center;
				padding: 8px;
			}
		}
	}
</style>
