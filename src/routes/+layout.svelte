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
	const iconStrokeWidth = 2;
	// title
	import { setTitle } from "$lib/route/routes";
	$: title = setTitle($page.route.id ?? "no title");
	// form
	import { enhance } from "$app/forms";
	import { afterNavigate, beforeNavigate, goto } from "$app/navigation";
	import IconBrandGithub from "@tabler/icons-svelte/IconBrandGithub.svelte";
	import IconBrandSvelte from "@tabler/icons-svelte/IconBrandSvelte.svelte";
	import IconBrandYoutube from "@tabler/icons-svelte/IconBrandYoutube.svelte";
	import { onMount, beforeUpdate, afterUpdate } from "svelte";
	let nowRouteId: string = "/";
	const updateUrlInput = () => {
		nowRouteId = $page.url.pathname;
	};
	afterNavigate(() => updateUrlInput());
	// $: nowRouteId = $page.route.id;
	//
</script>

<svelte:head>
	<title>{title.length > 0 ? `${title} | ` : ""}Monadic</title>
	<!-- setting Theme -->
	<script>
		setDefaultTheme();
	</script>
	<!-- theme=""からdata-theme=""に移行する -->
	<!-- https://developer.mozilla.org/ja/docs/Learn/HTML/Howto/Use_data_attributes -->
</svelte:head>

<div id="app">
	<Header>
		<a class="hover-1" href="{base}/" slot="logo">Monadic</a>
		<form
			class="url-input"
			method="post"
			use:enhance={async ({ formData }) => {
				const url = await formData.get("url").toString();
				goto(url, { noScroll: true });
			}}>
			<input type="text" name="url" bind:value={nowRouteId} />
		</form>
		<div class="sns-link" slot="link">
			<a class="hover-1" href="https://github.com/monax-owo/monadic">
				<IconBrandGithub stroke={iconStrokeWidth} />
			</a>
			<a class="hover-1" href="https://kit.svelte.jp">
				<IconBrandSvelte stroke={iconStrokeWidth} />
			</a>
			<a class="hover-1" href="https://www.youtube.com/@energymonaka/featured">
				<IconBrandYoutube stroke={iconStrokeWidth} />
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
		}
	}
</style>
