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
			width: 80vw;
			height: 64px;
			max-width: 1152px;
			margin: 0 auto;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;

			& slot[name="logo"] {
				--uno: bg-[#9d7777];
				padding: 8px;
				display: flex;
				align-items: center;
			}
		}
	}
</style>
