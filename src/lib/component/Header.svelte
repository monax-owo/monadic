<script lang="ts">
	import "$lib/global.scss";
</script>

<header class="header">
	<div class="header-content shadow1">
		<slot name="logo">LOGO HERE</slot>
		<slot></slot>
		<slot name="link">SNS LINK HERE</slot>
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
		padding: 0 24px;
		& .header-content {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			margin: 12px auto;
			border: 1px solid transparent;
			border-radius: 12px;
			background: var(--bg);
			padding: 0 24px;
			max-width: 1024px;
			height: 56px;
			& [slot="logo"] {
				display: flex;
				align-items: center;
			}
		}
	}
	.shadow1 {
		box-shadow: 0 0 12px 0px rgba(0, 0, 0, 0.08);
	}
</style>
