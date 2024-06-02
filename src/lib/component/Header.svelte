<script lang="ts">
	// 
</script>

<header class="header">
	<div class="header-content shadow1">
		<slot name="logo">LOGO HERE</slot>
		<slot></slot>
		<slot name="link">SNS LINK HERE</slot>
	</div>
</header>

<style lang="scss">
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	.header {
		width: 100%;
	}
	.header-content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin: 12px 24px;
		border: 0 solid transparent;
		border-radius: 12px;
		background: var(--bg);
		padding: 0 24px;
		max-width: 1024px;
		height: 56px;
		:global(> [slot="logo"]) {
			display: flex;
			align-items: center;
			color: var(--text);
			font-size: 16px;
			font-weight: 500;
			text-decoration: none;
		}
		:global(*){
			color: var(--text);
		}
	}

</style>
