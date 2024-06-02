<script lang="ts">
	//
	import "virtual:uno.css";
	import "@unocss/reset/sanitize/sanitize.css";
	import "@unocss/reset/sanitize/assets.css";
	import "$lib/global.scss";
	import { base } from "$app/paths";
	import { page } from "$app/stores";
	import Header from "$lib/component/Header.svelte";
	import { setTitle } from "$lib/route/routes";
	// fonts
	// Montserrat
	// Supports weights 100-900
	import "@fontsource-variable/montserrat";
	// Noto Sans JP
	// Supports weights 100-900
	import "@fontsource-variable/noto-sans-jp";
	// icons
	import IconBrandGithub from "@tabler/icons-svelte/IconBrandGithub.svelte";
	import IconBrandSvelte from "@tabler/icons-svelte/IconBrandSvelte.svelte";

	$: title = setTitle($page.route.id ?? "");
</script>

<svelte:head>
	<title>{title.length > 0 ? `${title} |` : ""} Monadic</title>
</svelte:head>

<div id="app">
	<Header>
		<a class="logo" href="{base}/" slot="logo">Monadic</a>
		<div class="sns-link" slot="link">
			<a href="https://github.com/monax-owo/monadic">
				<IconBrandGithub stroke={2} />
			</a>
			<a href="https://kit.svelte.jp">
				<IconBrandSvelte stroke={2} />
			</a>
		</div>
	</Header>

	<div class="content">
		<pre class="route-id">{$page.route.id}</pre>
		<slot />
	</div>
</div>

<style lang="scss">
	:global(html) {
		background: var(--bg);
	}
	:global(body) {
		font-family: "Montserrat Variable", "Noto Sans JP Variable", sans-serif;
	}
	#app {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.content {
		margin: 0 auto;
		padding: 0 2rem;
		width: 100%;
		max-width: 1024px;
		& .route-id {
			margin-bottom: 16px;
			height: 24px;
		}
	}
</style>
