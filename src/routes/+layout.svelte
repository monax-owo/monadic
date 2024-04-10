<script lang="ts">
	import 'virtual:uno.css';
	import '@unocss/reset/normalize.css';
	import Breadcrumb from '$lib/component/Breadcrumb.svelte';
</script>

<div id="app" class="m-0 p-0">
	<Breadcrumb></Breadcrumb>
	<div class="p-4rem">
		<slot />
	</div>
</div>

<style lang="scss">
	#app {
	}
</style>
