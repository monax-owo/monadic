<script lang="ts">
	import Template from "$lib/component/Template.svelte";
	import { page } from "$app/stores";
</script>

<Template>
	<h1>{$page.status} : {$page.error?.message}</h1>
	<p>{$page.url.pathname}</p>
</Template>
