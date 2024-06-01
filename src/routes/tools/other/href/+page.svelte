<script lang="ts">
	let url: string;
</script>

<div>
	<input type="url" bind:value={url} />
	<a href={url} target="_blank" rel="noopener noreferrer"> JUMP! </a>
</div>
