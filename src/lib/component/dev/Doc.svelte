<script lang="ts">
	export let href: string;
	if (href === "" || !href) throw new Error("href is not defined");
</script>

<div class="Doc">
	<a {href} target="_blank" rel="noopener noreferrer">
		<slot>require</slot>
	</a>
</div>

<style lang="scss">
</style>
