<script lang="ts">
import "virtual:uno.css"
import "@unocss/reset/sanitize/sanitize.css"
import "@unocss/reset/sanitize/assets.css"
import { base } from "$app/paths"
import { page } from "$app/stores"
import Header from "$lib/component/Header.svelte"
import { setTitle } from "$lib/route/routes"
import IconBrandGithub from "@tabler/icons-svelte/IconBrandGithub.svelte"
import IconBrandSvelte from "@tabler/icons-svelte/IconBrandSvelte.svelte"

$: title = setTitle($page.route.id ?? "")
</script>

<svelte:head>
	<title>{title.length > 0 ? `${title} |` : ""} Monadic</title>
</svelte:head>

<div id="app">
	<Header>
		<a class="logo" href="{base}/" slot="logo">Monadic</a>
		<div class="flex flex-row justify-around">
			<nav class="flex flex-row justify-between items-center">
				<slot name="nav-link"></slot>
			</nav>
			<div class="sns-link">
				<a href="https://github.com/monax-owo/monadic">
					<IconBrandGithub stroke="{2}" />
				</a>
				<a href="https://kit.svelte.jp">
					<IconBrandSvelte stroke="{2}" />
				</a>
			</div>
		</div>
	</Header>

	<div class="p-16">
		<pre>{$page.url.pathname}</pre>
		<slot />
	</div>
</div>

<style>
	:global(html) {
		background: #fafafa;
	}
</style>
