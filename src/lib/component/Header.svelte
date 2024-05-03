<script lang="ts">
	import { base } from "$app/paths";
	import IconBrandGithub from "@tabler/icons-svelte/IconBrandGithub.svelte";
	import IconBrandSvelte from "@tabler/icons-svelte/IconBrandSvelte.svelte";
</script>

<header class="w-100% bg-amber-1">
	<div class="header flex justify-between items-center w-100% max-w-6xl mx-a my-0 p-8 h-16">
		<a class="logo p-2 flex items-center" href="{base}/">Monadic</a>
		<div class="flex flex-row justify-around">
			<nav class="flex flex-row justify-between items-center">
				<slot name="nav-link"></slot>
			</nav>
			<div class="sns-link">
				<a href="https://github.com/monax-owo/monadic">
					<IconBrandGithub stroke={2} />
				</a>
				<a href="https://kit.svelte.jp">
					<IconBrandSvelte stroke={2} />
				</a>
			</div>
		</div>
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
	.logo {
		--uno: bg-[#9d7777];
	}
	nav {
		--uno: bg-blue;
	}
	slot[name="nav-link"] {
		--uno: h-100% text-center bg-[#2abfda];
	}
</style>
