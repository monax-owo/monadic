<script lang="ts">
	//
	import "virtual:uno.css";
	import "@unocss/reset/sanitize/sanitize.css";
	import "@unocss/reset/sanitize/assets.css";
	import { onMount } from "svelte";
	import { base } from "$app/paths";
	import { page } from "$app/stores";
	import "$lib/global.scss";
	// fonts
	// Montserrat
	// Supports weights 100-900
	import "@fontsource-variable/montserrat";
	// Noto Sans JP
	// Supports weights 100-900
	import "@fontsource-variable/noto-sans-jp";
	// Header
	import Header from "$lib/component/Header.svelte";
	// icons
	import IconBrandGithub from "@tabler/icons-svelte/IconBrandGithub.svelte";
	import IconBrandSvelte from "@tabler/icons-svelte/IconBrandSvelte.svelte";
	const iconStrokeWidth = 1.6;
	// title
	import { setTitle } from "$lib/route/routes";
	$: title = setTitle($page.route.id ?? "");
</script>

<svelte:head>
	<title>{title.length > 0 ? `${title} |` : ""} Monadic</title>
	<!-- setting Theme -->
	<script lang="ts">
		const defaultTheme = (): string => {
			let theme = localStorage.getItem("theme");
			theme ??= window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
			return theme;
		};
		let theme: string = defaultTheme();
		document.documentElement.setAttribute("theme",theme)
	</script>
</svelte:head>

<div id="app">
	<Header>
		<a class="logo" href="{base}/" slot="logo">Monadic</a>
		<div class="sns-link" slot="link">
			<a href="https://github.com/monax-owo/monadic">
				<IconBrandGithub stroke={iconStrokeWidth} />
			</a>
			<a href="https://kit.svelte.jp">
				<IconBrandSvelte stroke={iconStrokeWidth} />
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
		color: var(--text);
		& .route-id {
			margin-bottom: 16px;
			height: 24px;
		}
	}
</style>
