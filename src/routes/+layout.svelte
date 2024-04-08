<script lang="ts">
	import Breadcrumb from '$lib/component/Breadcrumb.svelte';
	import '@unocss/reset/normalize.css';
</script>

<div class="app">
	<Breadcrumb></Breadcrumb>
	<slot />
	<div></div>
</div>

<style>
</style>
