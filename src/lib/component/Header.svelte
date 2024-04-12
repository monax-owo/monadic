<script lang="ts">
</script>

<div class="header flex justify-between p-4 m-a w-100% bg-amber-1">
	<div class="header-content">
		<div class="logo">LOGO HEAR</div>
		<div class="nav-main flex flex-row justify-between">
			<div class="nav-link">a</div>
			<div class="nav-link">b</div>
			<div class="nav-link">c</div>
		</div>
	</div>
</div>

<style>
	.header {
		& .header-content {
			& .logo {
				background: #9d7777;
			}
			& .nav-main {
				--uno: bg-blue m-a w-40px;
			}
		}
	}
</style>
