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
			justify-content: space-between;
			align-items: center;
			margin: 12px auto;
			border: 1px solid transparent;
			border-radius: 10px;
			background: hsl(0, 0%, 92%);
			width: 80vw;
			max-width: 1024px;
			height: 56px;
			& [slot="logo"] {
				display: flex;
				align-items: center;
				margin: 0 8px;
				padding: 8px;
			}
		}
	}
</style>
