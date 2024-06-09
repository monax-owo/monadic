<script lang="ts">
	import { page } from "$app/stores";
	import { setTitle } from "$lib/route/routes";
	$: title = setTitle($page.route.id ?? "");
</script>

<div>
	<pre class="test">{title}</pre>
</div>

<style lang="scss">
	.test {
		// background: black;
	}
</style>
