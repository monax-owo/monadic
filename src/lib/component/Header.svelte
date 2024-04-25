<script lang="ts">
	import { base } from "$app/paths";
</script>

<header class="w-100% bg-amber-1">
	<div class="header flex justify-between items-center w-100% max-w-5xl mx-a my-0 p-8 h-16">
		<a class="logo p-2 flex items-center" href="{base}/">LOGO HERE</a>
		<nav class="flex flex-row justify-between w-80 items-center">
			<span class="nav-link">a</span>
			<span class="nav-link">b</span>
			<span class="nav-link">c</span>
		</nav>
	</div>
</header>
<div>
	<button class="btn">Example</button>
</div>

<style>
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
	header {
	}
	.header {
	}
	.logo {
		--uno: bg-[#9d7777];
	}
	nav {
		--uno: bg-blue;
	}
	.nav-link {
		--uno: h-100% w-16 text-center bg-[#2abfda];
	}
</style>
