<script lang="ts">
	// rest css
	import "$lib/global.scss";
	import "sanitize.css/sanitize.css";
	import "sanitize.css/assets.css";
	//
	import { base } from "$app/paths";
	import { page } from "$app/stores";
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
	const iconStrokeWidth = 2;
	// title
	import { setTitle } from "$lib/route/routes";
	$: title = setTitle($page.route.id ?? "no title");
</script>

<svelte:head>
	<title>{title.length > 0 ? `${title} | ` : ""}Monadic</title>
	<!-- setting Theme -->
	<script lang="ts">
		document.documentElement.setAttribute(
			"theme",
			localStorage.getItem("theme") ?? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
		);
	</script>
</svelte:head>

<div id="app">
	<Header>
		<a class="logo hover-1" href="{base}/" slot="logo">Monadic</a>
		<form class="url-input">
			<input type="text" bind:value={$page.route.id} />
		</form>
		<div class="sns-link" slot="link">
			<a class="hover-1" href="https://github.com/monax-owo/monadic">
				<IconBrandGithub stroke={iconStrokeWidth} />
			</a>
			<a class="hover-1" href="https://kit.svelte.jp">
				<IconBrandSvelte stroke={iconStrokeWidth} />
			</a>
		</div>
	</Header>
	<div class="content">
		<slot />
	</div>
</div>

<style lang="scss">
	:global(:root) {
		--test: #fff;
	}
	:global(html) {
		background: var(--bg);
	}
	#app {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.content {
		margin: 16px auto 0;
		padding: 0 64px;
		width: 100%;
		max-width: 1024px;
		color: var(--text);
	}
	.url-input {
		// border: 2px solid var(--b-bg);
		// border-radius: 6px;
		width: 100%;
		&:focus {
			border: 0 solid transparent;
		}
		& input {
			appearance: none;
			border: 0 solid transparent;
			border-radius: 6px;
			background: var(--bg);
			padding: 10px;
			width: 100%;
			height: calc(var(--Header-h) / 2);
			color: var(--text);
			&:focus {
				outline: var(--highlight-size) solid var(--highlight-bg);
			}
		}
	}
	.sns-link {
		display: flex;
		flex-direction: row;
		& a {
			border-radius: var(--b-radius);
			padding: 6px;
			color: var(--text);
		}
	}
</style>
